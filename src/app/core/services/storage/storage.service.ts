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

  public setSession(identity: string, email: string, rol: string): void {
    localStorage.setItem('identity', identity);
    localStorage.setItem('rol', rol);

    localStorage.removeItem('email');
    if ( email !== '' ) {
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

  public getRol(): string {
    const rol  = localStorage.getItem('rol') || '';
    return rol;
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
