import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ViewPostsComponent } from './posts/components/view-posts/view-posts.component';
import { AddPostComponent } from './posts/components/add-post/add-post.component';

const routes: Routes = [
  { path: 'posts', component: PostsComponent, children:[
    { path: 'view-posts', component: ViewPostsComponent},
    { path: 'add-post', component: AddPostComponent}
  ]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
