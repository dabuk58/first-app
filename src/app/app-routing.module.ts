import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(x => x.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
