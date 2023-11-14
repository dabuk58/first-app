import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { profileGuard } from './guards/profile.guard';
import { profileResolver } from './services/resolvers/profile-resolve.service';
import { LoginPageComponent } from './header/login-page/login-page.component';
import { LocalLoginComponent } from './components/local-login/local-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(x => x.PostsModule)
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'local-login',
    component: LocalLoginComponent
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
