import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './gaurds/auth-gaurd.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,       
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
