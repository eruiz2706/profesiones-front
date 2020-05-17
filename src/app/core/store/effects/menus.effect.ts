import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { MenuService } from '../../services';
import * as fromMenuActions from '../actions/menu.accions';

@Injectable()
export class MenusEffects {

    constructor(
        private actions$: Actions,
        private menuServices: MenuService
    ) {
    }

    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType(fromMenuActions.CARGAR_DATOS_EFFECT),
        switchMap( () => this.menuServices.getAll()
            .pipe(
                map( response => {
                        return new fromMenuActions.CargarDatosExitososAction(response);
                }),
                catchError( error => of(new fromMenuActions.CargarDatosFallidosAction(error)))
            )
        )
    );

    @Effect()
    loadAuth$: Observable<Action> = this.actions$.pipe(
        ofType(fromMenuActions.CARGAR_DATOS_AUTH_EFFECT),
        switchMap( () => this.menuServices.getAllAuth()
            .pipe(
                map( response => {
                        return new fromMenuActions.CargarDatosExitososAction(response);
                }),
                catchError( error => of(new fromMenuActions.CargarDatosFallidosAction(error)))
            )
        )
    );
}
