import { Action } from '@ngrx/store';

export const CARGAR_DATOS_EFFECT = '[Categorias] Cargar Datos Effect';
export const CARGAR_DATOS_EXITOSOS = '[Categorias] Cargar Datos Exitosos';
export const CARGAR_DATOS_FALLIDOS = '[Categorias] Cargar Datos Fallidos';

export const CREAR_REGISTRO_EFFECT = '[Categorias] Crear Registro Effect';
export const CREAR_REGISTRO_EXITOSO = '[Categorias] Crear Registro Exitoso';
export const CREAR_REGISTRO_FALLIDO = '[Categorias] Crear Registro Fallido';

export const EDITAR_REGISTRO = '[Categorias] Editar Registro';

export const ACTUALIZAR_REGISTRO_EFFECT = '[Categorias] Actualizar Registro Effect';
export const ACTUALIZAR_REGISTRO_EXITOSO = '[Categorias] Actualizar Registro Exitoso';
export const ACTUALIZAR_REGISTRO_FALLIDO = '[Categorias] Actualizar Registro Fallido';

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

export class CrearRegistroEffectAction implements Action {
    readonly type = CREAR_REGISTRO_EFFECT;
    constructor( public payload: any) {}
}

export class CrearRegistroExitosoAction implements Action {
    readonly type = CREAR_REGISTRO_EXITOSO;
    constructor( public payload: any) {}
}

export class CrearRegistroFallidoAction implements Action {
    readonly type = CREAR_REGISTRO_FALLIDO;
    constructor( public payload: any) {}
}

export class EditarRegistroAction implements Action {
    readonly type = EDITAR_REGISTRO;
    constructor( public payload: any) {}
}

export class ActualizarRegistroEffectAction implements Action {
    readonly type = ACTUALIZAR_REGISTRO_EFFECT;
    constructor( public payload: any) {}
}

export class ActualizarRegistroExitosoAction implements Action {
    readonly type = ACTUALIZAR_REGISTRO_EXITOSO;
    constructor( public payload: any) {}
}

export class ActualizarRegistroFallidoAction implements Action {
    readonly type = ACTUALIZAR_REGISTRO_FALLIDO;
    constructor( public payload: any) {}
}

export type actions =
CargarDatosEffectAction |
CargarDatosExitososAction |
CargarDatosFallidosAction |
CrearRegistroEffectAction |
CrearRegistroExitosoAction |
CrearRegistroFallidoAction |
EditarRegistroAction |
ActualizarRegistroEffectAction |
ActualizarRegistroExitosoAction |
ActualizarRegistroFallidoAction;
