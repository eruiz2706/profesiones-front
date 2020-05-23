import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, delay, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { UsuariosService, StorageService, AlertsService } from 'src/app/core/services';
import { Router } from '@angular/router';
import * as froAuthActions from '../accions/auth.accions';
import * as fromMenuAccions from '../accions/menu.accions';

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private usuarioServices: UsuariosService,
        private spinnerServices: NgxSpinnerService,
        private storageServices: StorageService,
        private router: Router,
        private alertService: AlertsService
    ) {
    }

    /*
    *se borra los datos de sesion y se llama al metodo de autenticacion
    */
    @Effect()
    autenticar$: Observable<Action> = this.actions$.pipe(
        ofType(froAuthActions.AUTH_LOGIN),
        map(( action: froAuthActions.AuthLoginAction ) => {
            const payload = action.payload;
            this.spinnerServices.show(payload.spinner);
            return payload;
        }),
        switchMap( ( payload ) => this.usuarioServices.login( payload.login )
            .pipe(
                map( response => {
                    this.spinnerServices.hide(payload.spinner);
                    return new froAuthActions.AuthLoginExitosoAction(response);
                }),
                catchError( error => {
                    this.spinnerServices.hide(payload.spinner);
                    return of(new froAuthActions.AuthLoginFallidoAction(error));
                })
            )
        )
    );

    /*login exitoso y actualizacion del menu*/
    @Effect()
    loginexitoso$: Observable<Action> = this.actions$.pipe(
        ofType(froAuthActions.AUTH_LOGIN_EXITOSO),
        map(( action: froAuthActions.AuthLoginExitosoAction ) => action.payload ),
        switchMap( ( payload ) => {
            this.storageServices.setSession(payload.data.token, payload.data.email);
            this.router.navigate( ['/dash'] );
            return of(new fromMenuAccions.CargarDatosAuthAction());
        })
    );

    /*login fallido*/
    @Effect({ dispatch: false })
    loginfallido$ = this.actions$.pipe(
       ofType(froAuthActions.AUTH_LOGIN_FALLIDO),
       map(( action: froAuthActions.AuthLoginFallidoAction ) => action.payload ),
       tap((payload) => {
            this.storageServices.removerSession();
            this.alertService.toastError('', payload.error.message);
       })
   );

    /*
    *logout - se borra los datos de sesion y se precarga el menu
    */
   @Effect()
   logout$: Observable<Action> = this.actions$.pipe(
    ofType(froAuthActions.AUTH_LOGOUT),
    switchMap( ( ) => {
        this.storageServices.removerSession();
        return of(new fromMenuAccions.CargarDatosAction());
    })
    );

    /*
    *registro de usuario
    */
   @Effect()
   register$: Observable<Action> = this.actions$.pipe(
       ofType(froAuthActions.AUTH_REGISTRO),
       map(( action: froAuthActions.AuthRegistroAction ) => {
           const payload = action.payload;
           this.spinnerServices.show(payload.spinner);
           return payload;
       }),
       switchMap( ( payload ) => this.usuarioServices.create( payload.user )
           .pipe(
               map( response => {
                   this.spinnerServices.hide(payload.spinner);
                   return new froAuthActions.AuthRegistroExitosoAction(response);
               }),
               catchError( error => {
                   this.spinnerServices.hide(payload.spinner);
                   return of(new froAuthActions.AuthRegistroFallidoAction(error));
               })
           )
       )
   );

   /*registro exitoso y autenticacion*/
   @Effect()
   registroexitoso$: Observable<Action> = this.actions$.pipe(
       ofType(froAuthActions.AUTH_REGISTRO_EXITOSO),
       map(( action: froAuthActions.AuthRegistroExitosoAction ) => action.payload ),
       switchMap( ( payload ) => {
            this.alertService.toastSuccess('', 'Su registro se realizo correctamente');
            return of(new froAuthActions.AuthLoginExitosoAction(payload));
       })
   );

   /*Registro fallido*/
   @Effect({ dispatch: false })
   registrofallido$ = this.actions$.pipe(
      ofType(froAuthActions.AUTH_REGISTRO_FALLIDO),
      map(( action: froAuthActions.AuthRegistroFallidoAction ) => action.payload ),
      tap((payload) => {
           this.storageServices.removerSession();
           this.alertService.toastError('', payload.error.message);
      })
  );
}
