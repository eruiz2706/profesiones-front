import * as fromActions from '../accions/auth.accions';
import { LoginState } from '../states/auth.state';

const initialState: LoginState = {
    user: {},
    error: {},
    message: ''
};

export function loginReducer( state = initialState, action: fromActions.actions) {

    switch ( action.type ) {

        case fromActions.AUTH_LOGIN: {
            return {
                ...state,
                loading: true,
                user: {},
                message: ''
            };
        }

        case fromActions.AUTH_LOGIN_EXITOSO: {
            return {
                ...state,
                loading: false,
                user: action.payload.data,
                message: action.payload.message
            };
        }

        case fromActions.AUTH_LOGIN_FALLIDO: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        case fromActions.AUTH_LOGOUT: {
            return {
                ...state,
                user: {},
                message: 'Cierre de sesion',
                error: {}
            };
        }

        case fromActions.AUTH_REGISTRO: {
            return {
                ...state,
                loading: true,
                user: {},
                message: ''
            };
        }

        case fromActions.AUTH_REGISTRO_EXITOSO: {
            return {
                ...state,
                loading: false,
                user: action.payload.data,
                message: action.payload.message
            };
        }

        case fromActions.AUTH_REGISTRO_FALLIDO: {
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
