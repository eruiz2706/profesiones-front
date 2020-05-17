import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ContentCrearComponent } from './components/content-crear/content-crear.component';
import { ContentEditComponent } from './components/content-edit/content-edit.component';

@NgModule({
  declarations: [
    CategoriasComponent,
    BusquedaComponent,
    CardItemComponent,
    ContentCrearComponent,
    ContentEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
