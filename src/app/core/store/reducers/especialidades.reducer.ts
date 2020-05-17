import * as fromEspecialidaesActions from '../actions/especialidades.accions';
import { EspecialidadesState } from '../states';

const initialState: EspecialidadesState = {
    data: [
        {nombre: 'carga datos1'},
        {nombre: 'carga datos2'},
        {nombre: 'carga datos3'},
        {nombre: 'carga datos4'},
        {nombre: 'carga datos5'},
        {nombre: 'carga datos6'},
        {nombre: 'carga datos7'},
        {nombre: 'carga datos8'},
        {nombre: 'carga datos9'},
        {nombre: 'carga datos10'},
        {nombre: 'carga datos11'},
        {nombre: 'carga datos12'},
        {nombre: 'carga datos13'},
        {nombre: 'carga datos14'},
        {nombre: 'carga datos15'},
        {nombre: 'carga datos16'},
    ],
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

export function especialidadesReducer( state = initialState, action: fromEspecialidaesActions.actions) {

    switch ( action.type ) {

        case fromEspecialidaesActions.CARGAR_DATOS_EFFECT: {
            return {
                ...state,
                loading: true,
                error: '',
                message: '',
            };
        }

        case fromEspecialidaesActions.CARGAR_DATOS_EXITOSOS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload.data,
                count: action.payload.count,
                message: action.payload.message
            };
        }

        case fromEspecialidaesActions.CARGAR_DATOS_FALLIDOS: {
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
