import * as fromActions from '../accions/menu.accions';
import { MenuState } from '../states/menu.state';

const initialState: MenuState  = {
    data: [],
    loaded: false,
    loading: false,
    error: {}
};

export function menuReducer( state = initialState, action: fromActions.actions) {

    switch ( action.type ) {

        case fromActions.CARGAR_DATOS: {
            return {
                ...state,
                loading: true,
                error: {}
            };
        }

        case fromActions.CARGAR_DATOS_AUTH: {
            return {
                ...state,
                loading: true
            };
        }

        case fromActions.CARGAR_DATOS_EXITOSOS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
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

        default: {
            return state;
        }
    }
}
