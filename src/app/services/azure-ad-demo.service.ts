import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Profile } from '../profile/models/profile.model';


const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
const GRAPH_ENDPOINT_PIC = 'https://graph.microsoft.com/v1.0/me/photo/$value';

@Injectable({
  providedIn: 'root'
})
export class AzureAdDemoService {
  isLoggedIn: Subject<boolean> = new Subject<boolean>;

  constructor(private httpClient: HttpClient) { }

  getUserProfile(){
    return this.httpClient.get<Profile>(GRAPH_ENDPOINT);
  }

  //not working for now
  getUserProfilePic(){
    return this.httpClient.get(GRAPH_ENDPOINT_PIC, {
      responseType: 'blob'
    });
  }
}
