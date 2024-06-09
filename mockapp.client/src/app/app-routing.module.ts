import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { LoginComponent } from './login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
export function tokenGetter() {
  
  return localStorage.getItem("jwt");
}
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7044",
          "localhost:4200"],
        disallowedRoutes: ["http://example.com/examplebadroute/"],
      },
    }), ToastrModule.forRoot(),
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
