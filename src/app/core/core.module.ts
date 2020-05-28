import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppContentComponent } from '../core/components/app-content/app-content.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { FooterComponent } from '../core/components/footer/footer.component';
import { ScrolltopComponent } from '../core/components/scrolltop/scrolltop.component';
import { PaginaErrorComponent } from '../core/components/pagina-error/pagina-error.component';

import {
  FuncionesService,
  StorageService,
  MenuService,
  AuthInterceptorService,
  HomeService,
  CategoriasService,
  EspecialidadesService,
  UsuariosService,
  AlertsService,
  ModalService,
  BaseUrlInterceptorService,
  ErrorService
} from './services';

import {
  LoginGuard,
  AdminRolGuard,
  ClienteRolGuard,
  ProfesionalRolGuard
} from './guards/guards.index';
import { SharedModule } from '../shared/shared.module';
import { PaginaAlertComponent } from './components/pagina-alert/pagina-alert.component';

@NgModule({
  declarations: [
    AppContentComponent,
    HeaderComponent,
    FooterComponent,
    ScrolltopComponent,
    PaginaErrorComponent,
    PaginaAlertComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    { provide : HTTP_INTERCEPTORS, useClass: BaseUrlInterceptorService, multi   : true },
    { provide : HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi   : true },

    FuncionesService,
    StorageService,
    MenuService,
    HomeService,
    CategoriasService,
    EspecialidadesService,
    UsuariosService,
    AlertsService,
    ModalService,
    ErrorService,

    LoginGuard,
    AdminRolGuard,
    ClienteRolGuard,
    ProfesionalRolGuard
  ]
})
export class CoreModule { }
