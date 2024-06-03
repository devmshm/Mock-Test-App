import { Component, OnInit } from '@angular/core';
import { QuizService, quizdata } from './quiz.service';
import { Router } from '@angular/router';
import { Observable, catchError, findIndex, of, throttleTime } from 'rxjs';

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
    private quizservices: QuizService, private router: Router) {
  }
  ngOnInit() {
    this.getquiz();
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
    console.log('Selected Item:', optionID);
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

  // Method to update the selected item
  onSelectionChange(listIndex: number, selectedItem: string) {

    this.selectedItems[listIndex] = selectedItem;
  }
  selectItem(questionId: number, selectedItem: string): void {
    if (!this.quizList1.includes(selectedItem)) {
      this.quizList1.push(selectedItem);
    } 
  }
  response: { questionId: number, selectedOption: string }[] = [];
  saveSelectedItems(): void {
    this.response = []; 
    this.quizList.forEach(question => {
      if (question.selectedOption, question.quesId) {
        this.response.push({ questionId: question.quesId, selectedOption: question.selectedOption });
      }
    });
    console.log(this.response); 
  }
}
