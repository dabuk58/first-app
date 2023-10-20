import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';

const routes: Routes = [
    { path: '', redirectTo: 'view-posts', pathMatch: 'full'},
    { path: 'view-posts', component: ViewPostsComponent},
    { path: 'add-post', component: AddPostComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
