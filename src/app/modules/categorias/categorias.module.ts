import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { CategoriasRoutingModule } from './categorias-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CategoriasListaComponent } from './pages/categorias-lista/categorias-lista.component';
import { ListaComponent } from './components/lista/lista.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoriasListaComponent,
    ListaComponent,
    BusquedaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
