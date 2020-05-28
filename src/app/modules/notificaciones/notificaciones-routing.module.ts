import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificacionesComponent } from './pages/notificaciones/notificaciones.component';


const routes: Routes = [
  {
    path: 'notificaciones',
    component: NotificacionesComponent,
    data: {titulo: 'Lista de notificaciones'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificacionesRoutingModule { }
