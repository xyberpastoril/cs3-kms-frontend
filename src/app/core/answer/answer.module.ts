import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { DeleteComponent } from './delete/delete.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CreateComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AnswerModule { }
