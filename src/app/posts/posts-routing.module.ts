import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { addPostGuard } from '../guards/add-post.guard';
import { commentResolver } from '../services/resolvers/comment-resolve.service';

const routes: Routes = [
    { path: '', component: ViewPostsComponent},
    { path: 'add-post', component: AddPostComponent, canDeactivate: [addPostGuard]},
    { path: ':postId',
      loadChildren: () => import('../comments/comments.module').then(m => m.CommentsModule),
      resolve: { comments: commentResolver}
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
