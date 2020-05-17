import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppContentComponent } from './shared/components/app-content/app-content.component';
import { PaginaErrorComponent } from './shared/components/pagina-error/pagina-error.component';

const routes: Routes = [
  {
    path: '' ,
    component: AppContentComponent,
    children: [
      {
        path: '' ,
        redirectTo: 'home',
        pathMatch: 'full',
        data: {titulo: 'Home'}
      },
      {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path : '',
        loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
      },
      {
        path : 'chat',
        loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)
      },
      {
        path : '',
        loadChildren: () => import('./modules/profesiones/profesiones.module').then(m => m.ProfesionesModule)
      },
      {
        path : '',
        loadChildren: () => import('./modules/dash/dash.module').then(m => m.DashModule)
      },
      {
        path : '',
        loadChildren: () => import('./modules/categorias/categorias.module').then(m => m.CategoriasModule)
      },
      {
        path : '',
        loadChildren: () => import('./modules/especialidades/especialidades.module').then(m => m.EspecialidadesModule)
      },
    ]
  },
  {
    path : '**',
    component: AppContentComponent,
    children: [
      {
        path: '' ,
        component: PaginaErrorComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
