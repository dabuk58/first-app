import { Component, Input, OnInit } from '@angular/core';
import { AuthService, UserInfo } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() userInfo!: UserInfo;

  constructor(private  authService: AuthService){}

  ngOnInit(): void { }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout(){
    this.authService.signOut();
  }

}
