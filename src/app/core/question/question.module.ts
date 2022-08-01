import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { ShowComponent } from './show/show.component';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    DeleteComponent,
    ShowComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CreateComponent,
  ]
})
export class QuestionModule { }
