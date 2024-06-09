import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
  constructor(private router: Router, private http: HttpClient,
    ) { }
  logOut = () => {
    localStorage.removeItem("jwt");
    this.router.navigate(["/"]);
  }
  title = 'mockapp.client';
}
