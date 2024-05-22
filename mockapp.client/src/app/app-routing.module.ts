import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' }, //default route
  {path: 'quiz', component: QuizComponent,
    //children: [
    //  { path: '', redirectTo: 'updates', pathMatch: 'full' },
    //  { path: 'offers', component: ProductOfferComponent },
    //  { path: 'updates', component: ProductUpdatesComponent }
    //]
  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
