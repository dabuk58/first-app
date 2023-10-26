import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsService } from 'src/app/services/comments.service';
import { CommentsComponent } from './comments.component';



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[CommentsService]
})
export class CommentsModule { }
