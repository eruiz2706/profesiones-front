import { createAction, props } from '@ngrx/store';

export const cargarDatos = createAction('[Menu] Cargar Datos', props<any>());
export const reloadDatos = createAction('[Menu] Reload Datos');

