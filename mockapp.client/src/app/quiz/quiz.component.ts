import { Component, OnInit } from '@angular/core';
import { QuizService, quizdata } from './quiz.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})

export class QuizComponent implements OnInit {
  public quizList: any[]=[];
 // qz: q[]=[];
  constructor(
    private quizservices: QuizService, private router: Router) {
  }
  ngOnInit() {   
    this.getquiz();
  }
  getquiz() {       
    this.quizservices.getquiz().subscribe(res => {
      this.quizList = res
      console.log(this.quizList)
    })
    
  }

 
}
//constructor(http: HttpClient) {

//  http.get<userdatas[]>('https://localhost:7014/api/candidate/getuser').subscribe(result => {
//    debugger;
//    this.users = result;
//  }, error => console.error(error));
//}
