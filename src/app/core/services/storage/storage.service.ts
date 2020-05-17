import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private API_URL: string;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL;
  }

  public crearUsuario(usuario: any ): Observable<any> {
    const url = `${this.API_URL}/registro`;
    return this.http.post(url, usuario);
  }

  public autenticar(login: any): Observable<any> {
    const url = `${this.API_URL}/login`;
    return this.http.post(url, login);
  }

  public setSession(identity: string, email: string, recuerdame: boolean): void {
    localStorage.setItem('identity', identity);

    localStorage.removeItem('email');
    if ( recuerdame ) {
      localStorage.setItem('email', email);
    }

    /*localStorage.setItem('UserId',currentUser.id);
    localStorage.setItem('currentUser',JSON.stringify({
      "id": currentUser.id,
      "nombre": currentUser.nombre_usuario,
      "idrol" : currentUser.codigo_rol,
      "rol" : currentUser.nombre_rol,
      "imagen" : currentUser.imagen
    }));*/
  }

  public removerSession(): void {
    localStorage.removeItem('identity');
  }

  public getIdentity(): string {
    const identity  = localStorage.getItem('identity') || '';
    return identity;
  }

  public getEmail(): string {
    const email  = localStorage.getItem('email') || '';
    return email;
  }

  isAuthenticated(): boolean {
    return (this.getIdentity() === '') ? false : true;
  }

  /*getCurrentUser(){
    let currentUser=localStorage.getItem('currentUser');
    if(currentUser==null)currentUser='';
    console.log(currentUser);
    return JSON.parse(currentUser);
  }*/

  /*getCurrentUserId(){
    let userId  =localStorage.getItem('UserId');
    return userId;
  }*/

}
