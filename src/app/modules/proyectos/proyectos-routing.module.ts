import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

const routes: Routes = [
  {
    path: 'proyectos',
    component: ProyectosComponent,
    data: {titulo: 'Lista de proyectos'}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectosRoutingModule { }
