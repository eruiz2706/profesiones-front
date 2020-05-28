import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu: any[];
  private menu$ = new BehaviorSubject<any>([]);
  constructor(
    private storageServices: StorageService
  ) {
    this.menu = [];
  }

  getAll(): Observable<any> {
    this.menu = [];
    if (this.storageServices.isAuthenticated()) {
      if (this.storageServices.getRol() === 'ADMIN_ROL') {
        this.menu = [
          { titulo: 'Dashboard', url: '/dash', icono: '' },
          {
            titulo: 'Maestros', url: '#', icono: '' ,
            submenu: [
              { titulo: 'Categorias', url: '/categorias', icono: '' },
              { titulo: 'Especialidad', url: '/especialidades', icono: '' },
              { titulo: 'Genero', url: '/genero', icono: '' }
            ]
          },
          { titulo: '', url: '#', icono: 'fa fa-gears',
            submenu: [
              { titulo: 'Perfil como cliente', url: '/perfil', icono: '' },
              { titulo: 'Cerrar sesiòn', url: '/login', icono: '' }
            ]
          }
        ];
      } else if (this.storageServices.getRol() === 'PROFESIONAL_ROL') {
        this.menu = [
          { titulo: 'Dashboard', url: '/dash', icono: '' },
          { titulo: 'Proyectos', url: '/proyectos', icono: '' },
          { titulo: 'Favoritos', url: '/favoritos', icono: '' },
          { titulo: '', url: '/notificaciones', icono: 'fa fa-bell-o'},
          { titulo: '', url: '#', icono: 'fa fa-gears',
            submenu: [
              { titulo: 'Perfil como cliente', url: '/perfil', icono: '' },
              { titulo: 'Perfil como profesional', url: '/perfil-prof', icono: '' },
              { titulo: 'Cerrar sesiòn', url: '/login', icono: '' }
            ]
          }
        ];
      } else if (this.storageServices.getRol() === 'CLIENTE_ROL') {
        this.menu = [
          { titulo: 'Dashboard', url: '/dash', icono: '' },
          { titulo: 'Proyectos', url: '/proyectos', icono: '' },
          { titulo: 'Favoritos', url: '/favoritos', icono: '' },
          { titulo: '', url: '/notificaciones', icono: 'fa fa-bell-o'},
          { titulo: '', url: '#', icono: 'fa fa-gears',
            submenu: [
              { titulo: 'Perfil como cliente', url: '/perfil', icono: '' },
              { titulo: 'Cerrar sesiòn', url: '/login', icono: '' }
            ]
          }
        ];
      }
    } else {
      this.menu = [
        { titulo: 'Profesiones', url: '/profesiones', icono: '' },
        { titulo: 'Como Funciona', url: '/como-funciona', icono: '' },
        { titulo: 'Registrate', url: '/registro', icono: '' },
        { titulo: 'Ingresar', url: '/login', icono: '' }
      ];
    }
    this.menu$.next({
      data: this.menu
    });
    return this.menu$.asObservable();
  }

}
