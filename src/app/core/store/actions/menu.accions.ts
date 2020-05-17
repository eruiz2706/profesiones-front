import { Action } from '@ngrx/store';

export const CARGAR_DATOS_EFFECT = '[Menu] Cargar Datos Effect';
export const CARGAR_DATOS_AUTH_EFFECT = '[Menu] Cargar Datos Auth Effect';
export const CARGAR_DATOS_EXITOSOS = '[Menu] Cargar Datos Exitosos';
export const CARGAR_DATOS_FALLIDOS = '[Menu] Cargar Datos Fallidos';

export class CargarDatosEffectAction implements Action {
    readonly type = CARGAR_DATOS_EFFECT;
}

export class CargarDatosAuthEffectAction implements Action {
    readonly type = CARGAR_DATOS_AUTH_EFFECT;
}

export class CargarDatosExitososAction implements Action {
    readonly type = CARGAR_DATOS_EXITOSOS;

    constructor( public payload: any) {

    }
}

export class CargarDatosFallidosAction implements Action {
    readonly type = CARGAR_DATOS_FALLIDOS;

    constructor( public payload: any) {

    }
}

export type actions =
CargarDatosEffectAction |
CargarDatosAuthEffectAction |
CargarDatosExitososAction |
CargarDatosFallidosAction;
