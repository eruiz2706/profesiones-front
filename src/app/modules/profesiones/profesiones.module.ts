import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesionesRoutingModule } from './profesiones-routing.module';
import { ProfesionesPerfilComponent } from './pages/profesiones-perfil/profesiones-perfil.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfesionesListaComponent } from './pages/profesiones-lista/profesiones-lista.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { HabilidadesCardComponent } from './components/habilidades-card/habilidades-card.component';
import { ProfesionalItemCardComponent } from './components/profesional-item-card/profesional-item-card.component';
import { FiltrosBusquedaComponent } from './components/filtros-busqueda/filtros-busqueda.component';


@NgModule({
  declarations: [
    ProfesionesPerfilComponent,
    ProfesionesListaComponent,
    ProfileCardComponent,
    HabilidadesCardComponent,
    ProfesionalItemCardComponent,
    FiltrosBusquedaComponent
  ],
  imports: [
    CommonModule,
    ProfesionesRoutingModule,
    SharedModule,
  ]
})
export class ProfesionesModule { }
