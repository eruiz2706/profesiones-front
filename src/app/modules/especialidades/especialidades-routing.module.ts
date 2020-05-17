import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';


const routes: Routes = [
  {
    path: 'especialidades',
    component: EspecialidadesComponent,
    data: {titulo: 'Lista Especialides'}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EspecialidadesRoutingModule { }
