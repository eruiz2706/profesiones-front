import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadesRoutingModule } from './especialidades-routing.module';
import { EspecialidadesComponent } from './pages/especialidades/especialidades.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EspecialidadesComponent],
  imports: [
    CommonModule,
    EspecialidadesRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class EspecialidadesModule { }
