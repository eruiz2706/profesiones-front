import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private navegacion: any[];
  private navegacion$ = new BehaviorSubject<any>([]);
  private API_URL: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.API_URL = environment.API_URL;
  }

  actualizarMenu$() {

    this.navegacion = [
      {
        titulo: 'Profesiones',
        url: '/profesiones'
      },
      {
        titulo: 'Como Funciona',
        url: '/como-funciona'
      },
      {
        titulo: 'Registrate',
        url: '/registro'
      },
      {
        titulo: 'Ingresar',
        url: '/login'
      }
    ];

    if ( this.authService.isAuthenticated() ) {

      if (this.authService.getEmail() === 'eruiz2706@gmail') {
        this.navegacion = [
          {
            titulo: 'Dashboard',
            url: '/dashboard'
          },
          {
            titulo: 'Categorias',
            url: '/categorias'
          },
          {
            titulo: 'Especialidades',
            url: '/especialidades'
          },
          {
            titulo: 'Perfil',
            url: '/perfil'
          },
          {
            titulo: 'Salir',
            url: '/login'
          }
        ];
      } else {
        this.navegacion = [
          {
            titulo: 'Profesiones',
            url: '/profesiones'
          },
          {
            titulo: 'Como Funciona',
            url: '/como-funciona'
          },
          {
            titulo: 'Dashboard',
            url: '/dash'
          },
          {
            titulo: 'Proyectos',
            url: '/proyectos'
          },
          {
            titulo: 'Favoritos',
            url: '/favoritos'
          },
          {
            titulo: 'Salir',
            url: '/login'
          }
        ];
      }
    }
    this.navegacion$.next(this.navegacion);
  }

  getMenu$(): Observable<any[]> {
    return this.navegacion$.asObservable();
  }

}
