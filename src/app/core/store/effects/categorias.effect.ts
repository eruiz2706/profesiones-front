import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, delay, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { CategoriasService, AlertsService, ModalService } from 'src/app/core/services';
import * as fromActions from '../accions/categorias.accions';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class CategoriasEffects {

    constructor(
        private actions$: Actions,
        private categoriasServices: CategoriasService,
        private spinnerServices: NgxSpinnerService,
        private alertServices: AlertsService
    ) {
    }

    @Effect()
    cargar$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.CARGAR_DATOS),
        switchMap( () => this.categoriasServices.getAll()
            .pipe(
                map( response => {
                    return new fromActions.CargarDatosExitososAction(response);
                }),
                catchError( error => {
                    return of( new fromActions.CargarDatosFallidosAction(error) );
                })
            )
        )
    );

    /*@Effect()
    crear$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.CREAR_REGISTRO_EFFECT),
        map(( action: fromActions.CrearRegistroEffectAction ) => {
            const payload = action.payload;
            this.spinnerServices.show(payload.spinner);
            return payload;
        }),
        switchMap( ( payload ) => this.categoriasServices.create( payload.categoria )
            .pipe(
                map( response => {
                    this.spinnerServices.hide(payload.spinner);
                    return new fromActions.CrearRegistroExitosoAction(response);
                }),
                catchError( error => {
                    this.spinnerServices.hide(payload.spinner);
                    return of(new fromActions.CrearRegistroFallidoAction(error));
                })
            )
        )
    );

    /*creacion exitosa*/
    /*@Effect()
    creacionexitoso$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.CREAR_REGISTRO_EXITOSO),
        map(( action: fromActions.CrearRegistroExitosoAction ) => action.payload ),
        switchMap( ( payload ) => {
            this.alertServices.toastSuccess('', payload.message);
            return of(new fromActions.CargarDatosEffectAction());
        })
    );
    */

    /*creacion fallida*/
    /*@Effect({ dispatch: false })
    creacionfallido$ = this.actions$.pipe(
        ofType(fromActions.CREAR_REGISTRO_FALLIDO),
        map(( action: fromActions.CrearRegistroFallidoAction ) => action.payload ),
        tap((payload) => {
            this.alertServices.toastError('', payload.error.message);
        })
    );
    */
   /*@Effect()
    actualizar$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.ACTUALIZAR_REGISTRO_EFFECT),
        map(( action: fromActions.ActualizarRegistroEffectAction ) => action.payload ),
        switchMap( ( payload ) => this.categoriasServices.update( payload, payload.id )
            .pipe(
                map( response => {
                        return new fromActions.ActualizarRegistroExitosoAction(response);
                }),
                catchError( error => of(new fromActions.ActualizarRegistroFallidoAction(error)))
            )
        )
    );*/

}
