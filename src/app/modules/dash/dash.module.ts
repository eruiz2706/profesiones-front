import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './pages/dash/dash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConfirmacionComponent } from './pages/confirmacion/confirmacion.component';


@NgModule({
  declarations: [DashComponent, ConfirmacionComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    SharedModule
  ]
})
export class DashModule { }
