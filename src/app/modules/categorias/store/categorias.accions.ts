import { createAction, props } from '@ngrx/store';

export const cargarDatos = createAction('[Categorias] Cargar Datos', props<any>());
export const cargarItem = createAction('[Categorias] Cargar Item', props<any>());
export const reloadDatos = createAction('[Categorias] Reload Datos');

