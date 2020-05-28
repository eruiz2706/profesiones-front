import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerfilRoutingModule } from './perfil-routing.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InfoPersonalComponent } from './components/info-personal/info-personal.component';
import { CambioClaveComponent } from './components/cambio-clave/cambio-clave.component';
import { PerfilProfesionalComponent } from './pages/perfil-profesional/perfil-profesional.component';
import { InfoProfesionalComponent } from './components/info-profesional/info-profesional.component';
import { HistorialLabComponent } from './components/historial-lab/historial-lab.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PerfilComponent, InfoPersonalComponent, CambioClaveComponent, PerfilProfesionalComponent, InfoProfesionalComponent, HistorialLabComponent ],
  imports: [
    CommonModule,
    PerfilRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class PerfilModule { }
