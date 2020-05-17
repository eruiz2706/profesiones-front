import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formError'
})
export class FormErrorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {

    let mensaje = '';

    if ( value !== null) {
      if ( value.required ) {
        mensaje = 'campo requerido';
      }
      if ( value.email ) {
        mensaje = 'email invalido';
      }
    } else {
      mensaje = 'campo invalido';
    }

    return mensaje;
  }

}
