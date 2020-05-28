import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [ProyectosComponent],
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    SharedModule
  ]
})
export class ProyectosModule { }
