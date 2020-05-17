import * as fromMenuActions from '../actions/menu.accions';
import { MenuState } from '../states';

const initialState: MenuState  = {
    data: [],
    loaded: false,
    loading: false,
    error: '' 
};

export function menuReducer( state = initialState, action: fromMenuActions.actions) {

    switch ( action.type ) {

        case fromMenuActions.CARGAR_DATOS_EFFECT: {
            return {
                ...state,
                loading: true
            };
        }

        case fromMenuActions.CARGAR_DATOS_AUTH_EFFECT: {
            return {
                ...state,
                loading: true
            };
        }

        case fromMenuActions.CARGAR_DATOS_EXITOSOS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload
            };
        }

        case fromMenuActions.CARGAR_DATOS_FALLIDOS: {
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
