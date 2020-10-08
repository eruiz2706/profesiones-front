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

    let headers = {};

    if (req.url.indexOf('uploadImg') === -1) {
      headers = {
        'Content-Type': 'application/json',
        Authorization: this.storageService.getIdentity()
      };
    } else {
      headers = {
        Authorization: this.storageService.getIdentity()
      };
    }

    console.log(headers);
    req = req.clone({
     setHeaders: headers
    });

    return next.handle( req );
  }
}
