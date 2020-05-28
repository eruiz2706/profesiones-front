import { createAction, props } from '@ngrx/store';

export const cargarDatos = createAction('[Perfil] Cargar Datos', props<any>());
export const reloadDatos = createAction('[Perfil] Reload Datos');
