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
import { LoginPageComponent } from './header/login-page/login-page.component';
import { AuthInterceptor } from './services/interceptors/auth.interceptor';
import { AuthService } from './services/auth.service';
import { MsalGuard, MsalInterceptor, MsalModule, MsalRedirectComponent } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { LocalLoginComponent } from './components/local-login/local-login.component';
import { ReactiveFormsModule } from '@angular/forms';

const isIE = window.navigator.userAgent.indexOf('MSIE') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    LocalLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MsalModule.forRoot(new PublicClientApplication
      (
        {
          auth: {
            clientId: '2370ebe9-076c-4e22-9f22-77e8287544b9',
            redirectUri: 'http://localhost:4200',
            authority: 'https://login.microsoftonline.com/cfbde96d-e669-42b4-ac96-c1529e36d3df'
          },
          cache: 
          {
            cacheLocation: 'localStorage',
            storeAuthStateInCookie: isIE
          }
        }
      ),
      {
        interactionType: InteractionType.Redirect,
        authRequest: {
          scopes: ['user.read']
        }
      },
      {
        interactionType: InteractionType.Redirect,
        protectedResourceMap: new Map(
          [
            ['https://graph.microsoft.com/v1.0/me', ['user.Read']]
          ]
        )
      }
      )
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: ModifyUrlInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: FilterNumbersInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true},
    AuthService,
    MsalGuard
],
  bootstrap: [AppComponent, MsalRedirectComponent]
})
export class AppModule { }
