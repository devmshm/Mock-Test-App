import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { catchError, of, throttleTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  invalidLogin?: boolean;
  url = 'https://localhost:7044/api/login/';
  constructor(private router: Router, private http: HttpClient,
    private JwtHelperService: JwtHelperService, private toastr: ToastrService) { }
  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    this.http.post(this.url + "login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).pipe(
      throttleTime(2000),
      catchError(error => {
        console.error('Error loading data', error);
        return of([]);
      })
    ).subscribe((response) => {
      this.invalidLogin = false;  
      const token = (<any>response).response;
      localStorage.setItem("jwt", token);
      this.toastr.success("Logged In successfully");
      this.router.navigate(["/quiz"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
  isUserAuthenticated() {
    const token = localStorage.getItem("jwt");
    if (token && !this.JwtHelperService.isTokenExpired(token)) {
      return true;
    }
    else {
      return false;
    }
  }
 

}
export class _response {
  token?: any;
 
}
