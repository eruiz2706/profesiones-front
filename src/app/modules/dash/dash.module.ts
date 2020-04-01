import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './pages/dash/dash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    DashRoutingModule,
    SharedModule
  ]
})
export class DashModule { }
