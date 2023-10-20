import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    ViewPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PostsModule { }
