import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { LikesService } from '../services/likes.service';
import { MSAL_GUARD_CONFIG, MsalBroadcastService, MsalGuardConfiguration, MsalService } from '@azure/msal-angular';
import { Subject, filter, takeUntil } from 'rxjs';
import { InteractionStatus, RedirectRequest } from '@azure/msal-browser';
import { environment } from '../environments/environment';
import { AzureAdDemoService } from '../services/azure-ad-demo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  amountOfLikes!: number;
  isLoggedIn: boolean = false;
  private readonly _destroy = new Subject<void>;

  constructor(private likesService: LikesService,
              @Inject(MSAL_GUARD_CONFIG) private msalGuardConfig: MsalGuardConfiguration,
              private msalBroadcastService: MsalBroadcastService,
              private authService: MsalService,
              private azureAdDemoService: AzureAdDemoService){}

  ngOnInit(): void {
    this.likesService.getLikes.subscribe(likes => {
      this.amountOfLikes = likes;
    });

    this.msalBroadcastService.inProgress$.pipe(
      filter((interactionStatus: InteractionStatus) => 
        interactionStatus == InteractionStatus.None),
        takeUntil(this._destroy)
    ).subscribe(x => {
      this.isLoggedIn = this.authService.instance.getAllAccounts().length > 0;
      this.azureAdDemoService.isLoggedIn.next(this.isLoggedIn);
    });
  }

  onLogin(){
    if(this.msalGuardConfig.authRequest){
      this.authService.loginRedirect({...this.msalGuardConfig.authRequest} as RedirectRequest)
    } else {
      this.authService.loginRedirect();
    }
  }

  onLogout(){
    this.authService.logoutRedirect({postLogoutRedirectUri: environment.postLogoutUrl});
  }

  onProfile(){

  }

  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

}
