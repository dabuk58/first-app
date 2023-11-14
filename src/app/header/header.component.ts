import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LikesService } from '../services/likes.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

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
              private authService: AuthService,
              private router: Router){ }

  ngOnInit(): void {
    this.likesService.getLikes.pipe(
      takeUntil(this._destroy)
    ).subscribe(likes => {
      this.amountOfLikes = likes;
    });
  }

  onLogin(){
    this.router.navigateByUrl('/login');
  }

  onLogout(){
    this.authService.signOut();
  }
  
  ngOnDestroy(): void {
    this._destroy.next(undefined);
    this._destroy.complete();
  }

}
