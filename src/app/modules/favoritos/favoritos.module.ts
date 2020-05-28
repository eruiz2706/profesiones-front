import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FavoritosComponent],
  imports: [
    CommonModule,
    FavoritosRoutingModule,
    SharedModule
  ]
})
export class FavoritosModule { }
