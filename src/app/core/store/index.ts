import * as fromState from './states';
import * as fromReducer from './reducers';
import * as fromEffects from './effects';

export interface AppState {
    categorias: fromState.CategoriasState;
    menu: fromState.MenuState;
    especialidades: fromState.EspecialidadesState;
}

export const reducers = {
    categorias: fromReducer.categoriasReducer,
    menu: fromReducer.menuReducer,
    especialidades: fromReducer.especialidadesReducer
};

export const effects: any[] = [
    fromEffects.CategoriasEffects,
    fromEffects.MenusEffects,
    fromEffects.EspecialidadesEffects
];
