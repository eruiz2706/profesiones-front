
import * as fromMenuReducer from 'src/app/core/store/menu.reducers';
import * as fromPerfilReducer from 'src/app/modules/perfil/store/perfil.reducers';
import * as fromCategoriasReducer from 'src/app/modules/categorias/store/categorias.reducer';


export const reducers = {
    menu: fromMenuReducer.reducers,
    categorias: fromCategoriasReducer.reducers,
    perfil: fromPerfilReducer.reducers
};

export const effects: any[] = [
  //  fromAuthEffects.AuthEffects,
];
