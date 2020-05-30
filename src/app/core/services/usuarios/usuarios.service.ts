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

  public getPerfil(): Observable<any> {
    const url = `/usuarios/perfil`;
    return this.http.get(url);
  }

  public updatePerfil(data: any): Observable<any> {
    const url = `/usuarios/perfil`;
    return this.http.put(url, data);
  }

  public uploadImg(data: any): Observable<any> {
    const url = `/upload`;
    return this.http.put(url, data);
  }
}
