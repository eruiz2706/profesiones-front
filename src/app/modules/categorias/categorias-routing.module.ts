import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './pages/categorias/categorias.component';

const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriasComponent,
    data: {titulo: 'Lista Categorias'}
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
