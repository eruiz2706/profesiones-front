import { Action } from '@ngrx/store';

export const CARGAR_DATOS = '[Menu] Cargar Datos';
export const CARGAR_DATOS_AUTH = '[Menu] Cargar Datos Auth';
export const CARGAR_DATOS_EXITOSOS = '[Menu] Cargar Datos Exitosos';
export const CARGAR_DATOS_FALLIDOS = '[Menu] Cargar Datos Fallidos';

export class CargarDatosAction implements Action {
    readonly type = CARGAR_DATOS;
}

export class CargarDatosAuthAction implements Action {
    readonly type = CARGAR_DATOS_AUTH;
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
CargarDatosAction |
CargarDatosAuthAction |
CargarDatosExitososAction |
CargarDatosFallidosAction;
