import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() { }

/**
 * @desc genera una cadena aleatoria alfanumerica dependiendo la cantidad de caracteres ingresados
 * @param number longitudCadena - cantidad de caracteres a generar
 * @author Eduardo ruiz eruiz2706@gmail.com
 * @return string - cadena aleatoria
 */
  makeid(longitudCadena: number): string {
    let resultado = '';
    const characteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const characteresLength = characteres.length;
    for ( let i = 0; i < longitudCadena; i++ ) {
      resultado += characteres.charAt(Math.floor(Math.random() * characteresLength));
    }
    return resultado;
 }
}
