import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';
import { commentResolver } from '../services/resolvers/comment-resolve.service';

const routes: Routes = [
    { path: '',
      component: CommentsDetailsComponent,
      resolve: { comments: commentResolver }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }