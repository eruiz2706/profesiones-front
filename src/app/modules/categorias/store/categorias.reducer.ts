import { createReducer, on } from '@ngrx/store';
import * as actions from './categorias.accions';

export interface State {
    data: any[];
    loaded: boolean;
    item: any;
    count: number;
}

export const initialState: State = {
    data: [],
    loaded: false,
    item: {},
    count: 0
};

// tslint:disable-next-line: variable-name
const _reducers = createReducer(initialState,
    on(actions.cargarDatos, (state, payload ) => ({
        ...state,
        loaded: true,
        data: payload.data, count: payload.count
    })),
    on(actions.cargarItem, (state, payload) => ({
        ...state,
        item: payload
    })),
    on(actions.reloadDatos, (state) => ({
        ...state,
        loaded: false
    })),
);

export function reducers(state, action) {
  return _reducers(state, action);
}
