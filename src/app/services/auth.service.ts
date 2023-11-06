import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: '210457726639-4siv2bukts7tp7lq4ouue8gtmb7a1pn9.apps.googleusercontent.com',
  scope: 'openid profile email',
}

export interface UserInfo{
  info: {
    sub: string,
    email: string,
    name: string,
    picture: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn$ = new Subject<boolean>();

  constructor(private oAuthService: OAuthService) {}

  isLoggedIn(): boolean{
    return this.oAuthService.hasValidAccessToken();
  }

  login(){
    this.oAuthService.configure(oAuthConfig);

    this.oAuthService.loadDiscoveryDocument().then( () => {
      this.oAuthService.tryLoginImplicitFlow().then( () => {
        if(!this.oAuthService.hasValidAccessToken()){
          this.oAuthService.initLoginFlow();
        } else {
          this.isLoggedIn$.next(this.oAuthService.hasValidAccessToken());
        }
      })
    });
  }

  loadUserProfile(): Promise<UserInfo> {
    return this.oAuthService.loadUserProfile().then((userProfile) => {
      return userProfile as UserInfo;
    });
  }

  signOut(){
    this.oAuthService.logOut();
    console.log("after logout: " + this.oAuthService.hasValidAccessToken());
    this.isLoggedIn$.next(this.oAuthService.hasValidAccessToken());
  }

}
