import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsDetailsComponent } from './components/comments-details/comments-details.component';

const routes: Routes = [
    { path: '', component: CommentsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }