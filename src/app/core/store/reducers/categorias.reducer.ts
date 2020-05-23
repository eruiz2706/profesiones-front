import * as fromActions from '../accions/categorias.accions';
import { CategoriasState } from '../states/categorias.state';

const initialState: CategoriasState = {
    data: [],
    item: {},
    count: 0,
    loaded: false,
    loading: false,
    error: {},
    message: ''
};

export function categoriasReducer( state = initialState, action: fromActions.actions) {

    switch ( action.type ) {

        case fromActions.CARGAR_DATOS: {
            return {
                ...state,
                loading: true,
                error: {},
                message: '',
            };
        }

        case fromActions.CARGAR_DATOS_EXITOSOS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload.data,
                count: action.payload.count,
                message: action.payload.message
            };
        }

        case fromActions.CARGAR_DATOS_FALLIDOS: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case fromActions.EDITAR_REGISTRO: {
            return {
                ...state,
                item: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
