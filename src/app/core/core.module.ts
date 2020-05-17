import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  FuncionesService,
  StorageService,
  MenuService,
  AuthInterceptorService,
  HomeService,
  CategoriasService,
  EspecialidadesService
} from './services';

import {
  LoginGuard,
} from './guards/guards.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule
  ],
  providers: [
      {
        provide : HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi   : true,
    },
    FuncionesService,
    StorageService,
    MenuService,
    HomeService,
    CategoriasService,
    EspecialidadesService,
    LoginGuard
  ]
})
export class CoreModule { }
