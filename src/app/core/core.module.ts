import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  FuncionesService,
  AuthService,
  MenuService,
  AuthInterceptorService,
  HomeService
} from './services/services.index';

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
    AuthService,
    MenuService,
    HomeService,
    LoginGuard
  ]
})
export class CoreModule { }
