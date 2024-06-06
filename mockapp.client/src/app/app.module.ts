import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { JwtModule } from "@auth0/angular-jwt";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './gaurds/auth-gaurd.service';
export function tokenGetter() {
  debugger;
  return localStorage.getItem("jwt");
}
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,    
    FormsModule, ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    //JwtModule.forRoot({
    //  config: {
    //    tokenGetter: tokenGetter,
    //    allowedDomains: ["localhost:7044",
    //      "localhost:4200"],
    //    disallowedRoutes: []
    //  }
    //}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
