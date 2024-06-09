import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  postresponse(response: any): Observable<_response> {
    const httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<_response>(this.url + 'saveresponse', response, httpHeaders);
  }
}

export class _response {
  quesId?: number;
  optionID?: string;

}
export class quizdata {
  quesName?: any;
  optionName?: any;
  quesId?: any;
}
