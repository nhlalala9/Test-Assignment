import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveyResultsComponent } from './survey-results/survey-results.component';
import { TakeSurveyComponent } from './take-survey/take-survey.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'take-survey',component:TakeSurveyComponent},
  {path:'survey-result',component:SurveyResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
