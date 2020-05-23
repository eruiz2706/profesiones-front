import * as fromAuthState from 'src/app/core/store/states/auth.state';
import * as fromAuthAccions from 'src/app/core/store/accions/auth.accions';
import * as fromAuthReducer from 'src/app/core/store/reducers/auth.reducer';
import * as fromAuthEffects from 'src/app/core/store/effects/auth.effect';

import * as fromCategoriasState from 'src/app/core/store/states/categorias.state';
import * as fromCategoriasAccions from 'src/app/core/store/accions/categorias.accions';
import * as fromCategoriasReducer from 'src/app/core/store/reducers/categorias.reducer';

import * as fromMenuState from 'src/app/core/store/states/menu.state';
import * as fromMenuAccions from 'src/app/core/store/accions/menu.accions';
import * as fromMenuReducer from 'src/app/core/store/reducers/menu.reducer';
import * as fromMenuEffects from 'src/app/core/store/effects/menus.effect';


export interface AppState {
    auth: fromAuthState.LoginState;
    menu: fromMenuState.MenuState;
    categorias: fromCategoriasState.CategoriasState;
}

export const accions = {
    auth: fromAuthAccions,
    menu: fromMenuAccions,
    categorias: fromCategoriasAccions
};

export const reducers = {
    auth: fromAuthReducer.loginReducer,
    menu: fromMenuReducer.menuReducer,
    categorias: fromCategoriasReducer.categoriasReducer
};

export const effects: any[] = [
    fromAuthEffects.AuthEffects,
    fromMenuEffects.MenusEffects
];
