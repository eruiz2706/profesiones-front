import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private authServices: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    req = req.clone({
     setHeaders: {
       'Content-Type': 'application/json',
       'Authorization': this.authServices.getIdentity()
     }
    });

    return next.handle( req );
  }
}
