import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommentsService } from 'src/app/services/comments.service';
import { CommentsComponent } from './comments.component';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommentsRoutingModule,
    MaterialModule
  ],
  providers:[CommentsService]
})
export class CommentsModule { }
