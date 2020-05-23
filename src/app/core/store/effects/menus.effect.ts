import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { MenuService } from 'src/app/core/services';
import * as fromActions from '../accions/menu.accions';

@Injectable()
export class MenusEffects {

    constructor(
        private actions$: Actions,
        private menuServices: MenuService
    ) {
    }

    @Effect()
    load$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.CARGAR_DATOS),
        switchMap( () => this.menuServices.getAll()
            .pipe(
                map( response => {
                        return new fromActions.CargarDatosExitososAction(response);
                }),
                catchError( error => of(new fromActions.CargarDatosFallidosAction(error)))
            )
        )
    );

    @Effect()
    loadAuth$: Observable<Action> = this.actions$.pipe(
        ofType(fromActions.CARGAR_DATOS_AUTH),
        switchMap( () => this.menuServices.getAllAuth()
            .pipe(
                map( response => {
                        return new fromActions.CargarDatosExitososAction(response);
                }),
                catchError( error => of(new fromActions.CargarDatosFallidosAction(error)))
            )
        )
    );
}
