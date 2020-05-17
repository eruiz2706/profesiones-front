import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { CategoriasService } from '../../services';
import * as fromCategoriasActions from '../actions/categorias.accions';

@Injectable()
export class CategoriasEffects {

    constructor(
        private actions$: Actions,
        private categoriasServices: CategoriasService
    ) {
    }

    @Effect()
    cargar$: Observable<Action> = this.actions$.pipe(
        ofType(fromCategoriasActions.CARGAR_DATOS_EFFECT),
        delay(1000),
        switchMap( () => this.categoriasServices.getAll()
            .pipe(
                map( response => {
                        return new fromCategoriasActions.CargarDatosExitososAction(response);
                }),
                catchError( error => of(new fromCategoriasActions.CargarDatosFallidosAction(error)))
            )
        )
    );

    @Effect()
    crear$: Observable<Action> = this.actions$.pipe(
        ofType(fromCategoriasActions.CREAR_REGISTRO_EFFECT),
        map(( action: fromCategoriasActions.CrearRegistroEffectAction ) => action.payload ),
        switchMap( ( payload ) => this.categoriasServices.create( payload )
            .pipe(
                map( response => {
                        return new fromCategoriasActions.CrearRegistroExitosoAction(response);
                }),
                catchError( error => of(new fromCategoriasActions.CrearRegistroFallidoAction(error)))
            )
        )
    );

    @Effect()
    actualizar$: Observable<Action> = this.actions$.pipe(
        ofType(fromCategoriasActions.ACTUALIZAR_REGISTRO_EFFECT),
        map(( action: fromCategoriasActions.ActualizarRegistroEffectAction ) => action.payload ),
        switchMap( ( payload ) => this.categoriasServices.update( payload, payload.id )
            .pipe(
                map( response => {
                        return new fromCategoriasActions.ActualizarRegistroExitosoAction(response);
                }),
                catchError( error => of(new fromCategoriasActions.ActualizarRegistroFallidoAction(error)))
            )
        )
    );
}
