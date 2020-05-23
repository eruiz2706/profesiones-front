import { Action } from '@ngrx/store';

export const CARGAR_DATOS = '[Categorias] Cargar Datos';
export const CARGAR_DATOS_EXITOSOS = '[Categorias] Cargar Datos Exitosos';
export const CARGAR_DATOS_FALLIDOS = '[Categorias] Cargar Datos Fallidos';

export const EDITAR_REGISTRO = '[Categorias] Editar Registro';

export class CargarDatosAction implements Action {
    readonly type = CARGAR_DATOS;
}

export class CargarDatosExitososAction implements Action {
    readonly type = CARGAR_DATOS_EXITOSOS;
    constructor( public payload: any) {}
}

export class CargarDatosFallidosAction implements Action {
    readonly type = CARGAR_DATOS_FALLIDOS;
    constructor( public payload: any) {}
}

export class EditarRegistroAction implements Action {
    readonly type = EDITAR_REGISTRO;
    constructor( public payload: any) {}
}


export type actions =
CargarDatosAction |
CargarDatosExitososAction |
CargarDatosFallidosAction |
EditarRegistroAction;
