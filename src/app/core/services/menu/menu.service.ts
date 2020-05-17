import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: any[];
  private menu$ = new BehaviorSubject<any>([]);

  private menuAuth: any[];
  private menuAuth$ = new BehaviorSubject<any>([]);

  private API_URL: string;

  constructor(
    private http: HttpClient
  ) {
    this.API_URL = environment.API_URL;

    this.menu = [
      { titulo: 'Profesiones', url: '/profesiones' },
      { titulo: 'Como Funciona', url: '/como-funciona' },
      { titulo: 'Registrate', url: '/registro' },
      { titulo: 'Ingresar', url: '/login' }
    ];

    this.menuAuth = [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'Categorias', url: '/categorias' },
      { titulo: 'Especialidades', url: '/especialidades' },
      { titulo: 'Perfil', url: '/perfil' },
      { titulo: 'Salir', url: '/login' }
    ];
  }

  getAll(): Observable<any> {
    this.menu$.next(this.menu);
    return this.menu$.asObservable();
  }

  getAllAuth(): Observable<any> {
    this.menuAuth$.next(this.menuAuth);
    return this.menuAuth$.asObservable();
  }

}
