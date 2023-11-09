import { Component, OnInit, Renderer2 } from '@angular/core';

declare global {
  interface Window { google: any; }
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loadGoogleIdentityScript();
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

}
