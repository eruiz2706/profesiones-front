import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError, delay } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { EspecialidadesService } from '../../services';
import * as fromEspecialidadesActions from '../actions/especialidades.accions';

@Injectable()
export class EspecialidadesEffects {

    constructor(
        private actions$: Actions,
        private especialidadesServices: EspecialidadesService
    ) {
    }

    @Effect()
    cargar$: Observable<Action> = this.actions$.pipe(
        ofType(fromEspecialidadesActions.CARGAR_DATOS_EFFECT),
        delay(1000),
        switchMap( () => this.especialidadesServices.getAll()
            .pipe(
                map( response => {
                        return new fromEspecialidadesActions.CargarDatosExitososAction(response);
                }),
                catchError( error => of(new fromEspecialidadesActions.CargarDatosFallidosAction(error)))
            )
        )
    );

}
