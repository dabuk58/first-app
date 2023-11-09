import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MaterialModule } from './shared/material.module';
import { ModifyUrlInterceptor } from './services/interceptors/modify-url.interceptor';
import { FilterNumbersInterceptor } from './services/interceptors/filter-numbers.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { OAuthModule } from 'angular-oauth2-oidc';
import { LoginPageComponent } from './header/login-page/login-page.component';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: ModifyUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FilterNumbersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
