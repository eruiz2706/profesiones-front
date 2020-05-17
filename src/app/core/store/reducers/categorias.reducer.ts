import * as fromCategoriasActions from '../actions/categorias.accions';
import { CategoriasState } from '../states';

const initialState: CategoriasState = {
    data: [],
    item: {},
    count: 0,
    loaded: false,
    loading: false,
    loaded_creat: false,
    loading_creat: false,
    loaded_update: false,
    loading_update: false,
    error: '',
    message: ''
};

export function categoriasReducer( state = initialState, action: fromCategoriasActions.actions) {

    switch ( action.type ) {

        case fromCategoriasActions.CARGAR_DATOS_EFFECT: {
            return {
                ...state,
                loading: true,
                error: '',
                message: '',
            };
        }

        case fromCategoriasActions.CARGAR_DATOS_EXITOSOS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload.data,
                count: action.payload.count,
                message: action.payload.message
            };
        }

        case fromCategoriasActions.CARGAR_DATOS_FALLIDOS: {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        case fromCategoriasActions.CREAR_REGISTRO_EFFECT: {
            return {
                ...state,
                loading_creat: true,
                error: '',
                message: '',
            };
        }

        case fromCategoriasActions.CREAR_REGISTRO_EXITOSO: {
            return {
                ...state,
                loading_creat: false,
                loaded_creat: true,
                message: action.payload.message
            };
        }

        case fromCategoriasActions.CREAR_REGISTRO_FALLIDO: {
            return {
                ...state,
                loading_creat: false,
                loaded_creat: false,
                error: action.payload,
            };
        }

        case fromCategoriasActions.EDITAR_REGISTRO: {
            return {
                ...state,
                item: action.payload
            };
        }

        case fromCategoriasActions.ACTUALIZAR_REGISTRO_EFFECT: {
            return {
                ...state,
                loaded_update: true,
                error: '',
                message: '',
            };
        }

        case fromCategoriasActions.ACTUALIZAR_REGISTRO_EXITOSO: {
            return {
                ...state,
                loading_update: false,
                loaded_update: true,
                message: action.payload.message
            };
        }

        case fromCategoriasActions.ACTUALIZAR_REGISTRO_FALLIDO: {
            return {
                ...state,
                loading_update: false,
                loaded_update: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
