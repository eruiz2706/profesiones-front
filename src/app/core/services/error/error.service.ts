import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  tipoImagen(error: any): string {
    throw new Error("Method not implemented.");
  }

  constructor() { }

  contentImage(error: any): string {
    let tipoImagen = '';

    if (error.status === 0 || error.status === 500) {
      tipoImagen = 'error';
    } else if ( error.status === 403) {
      tipoImagen = 'noauth';
    }
    return tipoImagen;
  }
}
