import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesionesPerfilComponent } from './pages/profesiones-perfil/profesiones-perfil.component';
import { ProfesionesListaComponent } from './pages/profesiones-lista/profesiones-lista.component';

const routes: Routes = [
  {
    path: 'profesiones',
    component: ProfesionesListaComponent,
  },
  {
    path: 'profesiones-perfil',
    component: ProfesionesPerfilComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesionesRoutingModule { }
