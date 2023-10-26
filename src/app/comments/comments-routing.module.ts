import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentDetailsComponent } from './components/comment-details/comment-details.component';

const routes: Routes = [
    { path: '', component: CommentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }