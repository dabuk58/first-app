import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local-login',
  templateUrl: './local-login.component.html',
  styleUrls: ['./local-login.component.scss']
})
export class LocalLoginComponent implements OnInit {
  formGroup!: FormGroup;
  isLoggedInLocally: boolean = false;

  constructor(private router: Router) {}


  ngOnInit(): void {
    this.formGroup = new FormGroup({
      login: new FormControl(null, {
        updateOn: 'change',
        validators: Validators.required
      }),
      password: new FormControl(null, {
        updateOn: 'change',
        validators: Validators.required
      })
    });
  }

  onLogin(){
    const login = this.formGroup.get('login')?.value;
    const password = this.formGroup.get('password')?.value;

    this.isLoggedInLocally = true;

    setTimeout(() => {
      const iframeElement = document.getElementById('iframe') as HTMLIFrameElement;
      iframeElement.contentWindow?.postMessage({login: login, password: password}, 'http://localhost:5000');
    }, 300);
  }
}
