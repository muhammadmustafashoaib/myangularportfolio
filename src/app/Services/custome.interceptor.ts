import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomeInterceptor implements HttpInterceptor {


  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token= localStorage.getItem('token') ?? '';
    request = request.clone({

      setHeaders:{
        Authorization: token ? `Token ${token}` : '',
      },

    })
    return next.handle(request);
  }
}
