import { Action } from '@ngrx/store';

export const AUTH_LOGIN = '[Auth] Auth Login';
export const AUTH_LOGIN_EXITOSO = '[Auth] Auth Login Exitoso';
export const AUTH_LOGIN_FALLIDO = '[Auth] Auth Login  Fallido';
export const AUTH_LOGOUT = '[Auth] Auth Logout';
export const AUTH_REGISTRO = '[Auth] Auth Registro';
export const AUTH_REGISTRO_EXITOSO = '[Auth] Auth Registro Exitoso';
export const AUTH_REGISTRO_FALLIDO = '[Auth] Auth Registro Fallido';

export class AuthLoginAction implements Action {
    readonly type = AUTH_LOGIN;
    constructor( public payload: any) {}
}

export class AuthLoginExitosoAction implements Action {
    readonly type = AUTH_LOGIN_EXITOSO;
    constructor( public payload: any) {}
}

export class AuthLoginFallidoAction implements Action {
    readonly type = AUTH_LOGIN_FALLIDO;
    constructor( public payload: any) {}
}

export class AuthLogoutAction implements Action {
    readonly type = AUTH_LOGOUT;
}

export class AuthRegistroAction implements Action {
    readonly type = AUTH_REGISTRO;
    constructor( public payload: any) {}
}

export class AuthRegistroExitosoAction implements Action {
    readonly type = AUTH_REGISTRO_EXITOSO;
    constructor( public payload: any) {}
}

export class AuthRegistroFallidoAction implements Action {
    readonly type = AUTH_REGISTRO_FALLIDO;
    constructor( public payload: any) {}
}

export type actions =
AuthLoginAction |
AuthLoginExitosoAction |
AuthLoginFallidoAction |
AuthLogoutAction |
AuthRegistroAction |
AuthRegistroExitosoAction |
AuthRegistroFallidoAction;
