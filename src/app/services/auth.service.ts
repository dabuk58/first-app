import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';

export interface Profile{
  displayName: string,
  givenName: string,
  id: string,
  jobTitle: string
  mail: string,
  mobilePhone: string,
  surname: string,
  userPrincipalName: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>;
  isLocallyLoggedIn: boolean = false;

  constructor(private http: HttpClient) { }

  getGoogleToken(): string | null{
    return localStorage.getItem('google-token');
  }

  getUserProfileMicrosoft(){
    return this.http.get<Profile>(GRAPH_ENDPOINT);
  }

  signOut(){
  }

}
