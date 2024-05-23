import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  url = 'https://localhost:7044/api/quiz/';
  constructor(private http: HttpClient) { }
  getquiz(): Observable<quizdata[]> {
    return this.http.get<quizdata[]>(this.url + 'getquiz');
  }
}
export class quizdata {
  quesName?: any;
  optionName?: any;
  quesId?: any;
}
