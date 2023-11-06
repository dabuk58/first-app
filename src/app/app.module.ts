import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MaterialModule } from './shared/material.module';
import { ModifyUrlInterceptor } from './posts/interceptors/modify-url.interceptor';
import { FilterNumbersInterceptor } from './posts/interceptors/filter-numbers.interceptor';
import { ProfileComponent } from './profile/profile.component';
import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent
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
  { provide: HTTP_INTERCEPTORS, useClass: FilterNumbersInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
