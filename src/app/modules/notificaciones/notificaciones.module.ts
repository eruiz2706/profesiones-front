import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificacionesRoutingModule } from './notificaciones-routing.module';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [NotificacionesComponent],
  imports: [
    CommonModule,
    NotificacionesRoutingModule,
    SharedModule
  ]
})
export class NotificacionesModule { }
