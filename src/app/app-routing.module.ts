import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { ResetComponent } from './auth/reset/reset.component';
import { CategoryComponent } from './core/category/category.component';
import { HomeComponent } from './core/home/home.component';
import { SearchComponent } from './core/question/search/search.component';
import { ShowComponent } from './core/question/show/show.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

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
    path: 'search',
    component: SearchComponent,
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
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'terms',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
