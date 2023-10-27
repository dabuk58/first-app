import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommentsService } from 'src/app/services/comments.service';
import { CommentsComponent } from './comments.component';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { CommentsRoutingModule } from './comments-routing.module';
import { MaterialModule } from '../shared/material.module';
import { CommentComponent } from './components/comment/comment.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentsDetailsComponent,
    CommentComponent
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
