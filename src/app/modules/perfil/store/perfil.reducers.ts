import { createReducer, on } from '@ngrx/store';
import * as actions from './perfil.accions';

export interface State {
    user: any;
    loaded: boolean;
}

export const initialState: State = {
    user: {},
    loaded: false
};

// tslint:disable-next-line: variable-name
const _reducers = createReducer(initialState,
    on(actions.cargarDatos, (state, payload ) => ({
        ...state,
        loaded: true,
        user: payload.data
    })),
    on(actions.reloadDatos, (state) => ({
        ...state,
        loaded: false
    }))
);

export function reducers(state, action) {
  return _reducers(state, action);
}
