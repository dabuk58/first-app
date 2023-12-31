import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const googleToken = this.authService.getGoogleToken();

    if(googleToken != null){
      const authReq = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${googleToken}`)
      }); 

      return next.handle(authReq);
    }

    return next.handle(request);
  }
}
