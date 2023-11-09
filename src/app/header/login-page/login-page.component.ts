import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

declare global {
  interface Window { google: any; }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy{
  private readonly _destroy = new Subject<void>;
  isLoggedIn: boolean = false;

  constructor(private renderer: Renderer2,
              @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
              private msalBroadcastService: MsalBroadcastService,
              private msalService: MsalService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.loadGoogleIdentityScript();

    this.msalBroadcastService.inProgress$.pipe(
      filter((interactionStatus: InteractionStatus) => 
        interactionStatus == InteractionStatus.None),
        takeUntil(this._destroy)
    ).subscribe(x => {
      this.isLoggedIn = this.msalService.instance.getAllAccounts().length > 0;
      this.authService.isLoggedIn.next(this.isLoggedIn);
    });
  }

  onMicrosoftLogin(){
    if(this.msalGuardConfig.authRequest){
      this.msalService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest);
    } else {
      this.msalService.loginRedirect();
    }
  }

  loadGoogleIdentityScript() {
    const s = this.renderer.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://accounts.google.com/gsi/client';
    s.onload = () => this.renderButton();
    this.renderer.appendChild(document.head, s);
  }

  renderButton = () => {
    window.google.accounts.id.initialize({
      client_id: '210457726639-m5940hkuceh1v1i722k6k5qr487vcq6l.apps.googleusercontent.com',
      callback: this.handleCredentialResponse
    });

    window.google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'large' }  
    );

    window.google.accounts.id.prompt();
  }

  handleCredentialResponse = (response: any) => {
    console.log('Token: ' + response.credential);
    localStorage.setItem('google-token', response.credential);
  };


  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

}
