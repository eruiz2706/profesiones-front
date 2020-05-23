import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient
  ) {
  }

  public create(usuario: any ): Observable<any> {
    const url = `/registro`;
    return this.http.post(url, usuario);
  }

  public login(login: any): Observable<any> {
    const url = `/login`;
    return this.http.post(url, login);
  }
}