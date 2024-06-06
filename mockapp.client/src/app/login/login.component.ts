import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  //invalidLogin?: boolean;

  //url = 'https://localhost:7044/api/Login/';

  //constructor(private router: Router, private http: HttpClient,
  //  private JwtHelperService: JwtHelperService) { }
   
  //public login = (form: NgForm) => {
  //  debugger
  //  const credentials = JSON.stringify(form.value);
  //  this.http.post(this.url + "login", credentials, {
  //    headers: new HttpHeaders({
  //      "Content-Type": "application/json"
  //    })
  //  }).subscribe(response => {
  //    const token = (<any>response).token;
  //    localStorage.setItem("jwt", token);
  //    this.invalidLogin = false;
  //    //this.toastr.success("Logged In successfully");
  //    this.router.navigate(["/quiz"]);
  //  }, err => {

  //    this.invalidLogin = true;
  //  });
  //}
  //isUserAuthenticated() {
  //  const token = localStorage.getItem("jwt");
  //  if (token && !this.JwtHelperService.isTokenExpired(token)) {
  //    return true;
  //  }
  //  else {
  //    return false;
  //  }
  //}
}
