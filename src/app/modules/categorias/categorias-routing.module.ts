import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasListaComponent } from './pages/categorias-lista/categorias-lista.component';


const routes: Routes = [
  {
    path: 'categorias',
    component: CategoriasListaComponent,
    data: {titulo: 'Lista Categorias'}
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
