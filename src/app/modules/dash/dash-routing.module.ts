import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './pages/dash/dash.component';
import { LoginGuard } from 'src/app/core/guards/guards.index';

const routes: Routes = [
  {
    path: 'dash',
    component: DashComponent,
    data: {titulo: 'Dashboard'},
    canActivate: [ LoginGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
