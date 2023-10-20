import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { RouterModule } from '@angular/router';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsService } from './services/posts.service';
import { MaterialModule } from '../shared/material.module';



@NgModule({
  declarations: [
    PostsComponent,
    AddPostComponent,
    ViewPostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PostsRoutingModule,
    MaterialModule
  ],
  providers:[PostsService]
})
export class PostsModule { }
