import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptorService implements HttpInterceptor  {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {

    /*si ya variable no viene con http o https se completa la url*/
    if (!req.url.match(/^http(s)?:\/\/(.*)$/)) {
      const url = `${environment.API_URL}${req.url}`.replace(/([^:]\/)\/+/g, '$1');
      req = req.clone({ url });
    }
    return next.handle( req );

  }

}
