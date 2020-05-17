import { Action } from '@ngrx/store';

export const CARGAR_DATOS_EFFECT = '[Especialidades] Cargar Datos Effect';
export const CARGAR_DATOS_EXITOSOS = '[Especialidades] Cargar Datos Exitosos';
export const CARGAR_DATOS_FALLIDOS = '[Especialidades] Cargar Datos Fallidos';

export class CargarDatosEffectAction implements Action {
    readonly type = CARGAR_DATOS_EFFECT;
}

export class CargarDatosExitososAction implements Action {
    readonly type = CARGAR_DATOS_EXITOSOS;
    constructor( public payload: any) {}
}

export class CargarDatosFallidosAction implements Action {
    readonly type = CARGAR_DATOS_FALLIDOS;
    constructor( public payload: any) {}
}


export type actions =
CargarDatosEffectAction |
CargarDatosExitososAction |
CargarDatosFallidosAction;
