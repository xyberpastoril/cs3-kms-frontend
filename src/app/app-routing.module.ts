import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { CategoryComponent } from './core/category/category.component';
import { HomeComponent } from './core/home/home.component';
import { QuestionComponent } from './core/question/question.component';
import { ShowComponent } from './core/question/show/show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'reset',
    component: ResetComponent,
  },
  {
    path: 'forgot',
    component: ForgotComponent,
  },
  {
    path: 'questions',
    component: QuestionComponent,
  },
  {
    path: 'question',
    children: [
      {
        path: '',
        component: ShowComponent
      },
    ]
  },
  {
    path: 'categories',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
