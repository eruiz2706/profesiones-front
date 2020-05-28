import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PerfilProfesionalComponent } from './pages/perfil-profesional/perfil-profesional.component';


const routes: Routes = [
  {
    path: 'perfil',
    component: PerfilComponent,
    data: {titulo: 'Perfil como cliente'}
  },
  {
    path: 'perfil-prof',
    component: PerfilProfesionalComponent,
    data: {titulo: 'Perfil como profesional'}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfilRoutingModule { }
