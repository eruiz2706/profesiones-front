import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppContentComponent } from './core/components/app-content/app-content.component';
import { PaginaErrorComponent } from './core/components/pagina-error/pagina-error.component';
import { LoginGuard, AdminRolGuard } from './core/guards/guards.index';
import { PaginaAlertComponent } from './core/components/pagina-alert/pagina-alert.component';

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
        path : '',
        loadChildren: () => import('./modules/profesiones/profesiones.module').then(m => m.ProfesionesModule)
      },
      {
        path : '',
        loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule),
        canActivate : [ LoginGuard ]
      },
      {
        path : '',
        loadChildren: () => import('./modules/dash/dash.module').then(m => m.DashModule),
        canActivate : [ LoginGuard ]
      },
      {
        path : '',
        loadChildren: () => import('./modules/categorias/categorias.module').then(m => m.CategoriasModule),
        canActivate : [ AdminRolGuard, LoginGuard ]
      },
      {
        path : '',
        loadChildren: () => import('./modules/proyectos/proyectos.module').then(m => m.ProyectosModule),
        canActivate : [ LoginGuard ]
      },
      {
        path : '',
        loadChildren: () => import('./modules/favoritos/favoritos.module').then(m => m.FavoritosModule),
        canActivate : [ LoginGuard ]
      },
      {
        path : '',
        loadChildren: () => import('./modules/notificaciones/notificaciones.module').then(m => m.NotificacionesModule),
        canActivate : [ LoginGuard ]
      },
      {
        path : '',
        loadChildren: () => import('./modules/perfil/perfil.module').then(m => m.PerfilModule),
        canActivate : [ LoginGuard ]
      },
      {
        path : 'alert/:tipo',
        component: PaginaAlertComponent
      }
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
