import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private storageService: StorageService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    req = req.clone({
     setHeaders: {
       'Content-Type': 'application/json',
       //'Set-Cookie': 'HttpOnly;Secure;SameSite=Strict',
       'Authorization': this.storageService.getIdentity()
     }
    });

    return next.handle( req );
  }
}
