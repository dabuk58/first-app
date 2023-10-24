import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FilterNumbersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if(request.body !== null){
      const modifiedBody = request.body.body.replace(/[0-9]+/g, '');
      const modifiedRequest = request.clone({
        body: {
          ...request.body,
          body: modifiedBody
        }
      });

      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}
