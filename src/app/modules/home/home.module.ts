import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { VideoComponent } from './components/video/video.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProfesionesTopComponent } from './components/profesiones-top/profesiones-top.component';
import { CaracteristicasComponent } from './components/caracteristicas/caracteristicas.component';
import { ComoFuncionaComponent } from './components/como-funciona/como-funciona.component';
import { ContadorComponent } from './components/contador/contador.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [
    HomeComponent,
    VideoComponent,
    CategoriasComponent,
    ProfesionesTopComponent,
    CaracteristicasComponent,
    ComoFuncionaComponent,
    ContadorComponent,
    SliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
