import { Component, OnInit } from '@angular/core';
import { QuizService, quizdata } from './quiz.service';
import { Router } from '@angular/router';
import { Observable, catchError, findIndex, of, throttleTime } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})

export class QuizComponent implements OnInit {
  public quizList: any[] = [];
  public quizList1: any[] = [];

  currentIndex: number = 0;
  selectedValue: string = '';
  constructor(
    private quizservices: QuizService, private router: Router, http: HttpClient, private jwtHelper:JwtHelperService) {
  }
  ngOnInit() {
    this.getquiz();
  }
 
    
  
  isUserAuthenticated() {    
    const token = localStorage.getItem("jwt");
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
  logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/"]);
  }
  getquiz() {
    this.quizservices.getquiz().pipe(
      throttleTime(2000),
      catchError(error => {
        console.error('Error loading data', error);
        return of([]);
      })
    ).subscribe(res => {
      this.quizList = res;
    })
  }

  onRadioChange(optionID: any) {
    this.selectedValue = optionID.value;    
  }
  get quizItem() {
    return this.quizList[this.currentIndex];
  }

  qid(QuesId: number): void {
    if (this.currentIndex > -1) {
      this.currentIndex = this.quizList.findIndex(x => x.quesId === QuesId);
    }
  }

  prevItem(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  nextItem(): void {
    if (this.currentIndex < this.quizList.length - 1) {
      this.currentIndex++;
    }
  }
  selectedItems: string[] = new Array(this.quizList.length).fill(null);
  onSelectionChange(listIndex: number, selectedItem: string) {
    this.selectedItems[listIndex] = selectedItem;
  }
  selectItem(questionId: number, selectedItem: string): void {
    if (!this.quizList1.includes(selectedItem)) {
      this.quizList1.push(selectedItem);
    }
  }
  response: { quesId: number, optionID: string }[] = [];
  saveSelectedItems(): void {
    this.response = [];
    this.quizList.forEach(question => {
      if (question.selectedOption, question.quesId) {
        this.response.push({
          quesId: question.quesId,
          optionID: question.selectedOption
        });
      }
    });
    const res = this.response;
    this.quizservices.postresponse(res).subscribe(() => {
      alert('Response Saved Successfully..!!');
    });
    console.log(this.response);
  }
  //postSelections() {
  //  const apiUrl = 'https://your-api-endpoint.com/submit-quiz';
  //  this.http.post(apiUrl, this.response).subscribe(
  //    response => {
  //      console.log('Success:', response);
  //    },
  //    error => {
  //      console.error('Error:', error);
  //    }
  //  );
  //}
}
