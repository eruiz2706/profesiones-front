import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';


const routes: Routes = [
  {
    path: 'favoritos',
    component: FavoritosComponent,
    data: {titulo: 'Lista de favoritos'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritosRoutingModule { }
