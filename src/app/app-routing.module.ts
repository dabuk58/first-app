import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { MsalGuard } from '@azure/msal-angular';
import { profileGuard } from './guards/profile.guard';
import { profileResolver } from './services/resolvers/profile-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(x => x.PostsModule)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [profileGuard],
    resolve: { userInfo: profileResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
