import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TakeSurveyComponent } from './take-survey/take-survey.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'take-survey',component:TakeSurveyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
