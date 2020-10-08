import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgEmpty'
})
export class ImgEmptyPipe implements PipeTransform {

  transform(data: any, args?: any): any {

    if (data === '') {
      if ( args.tipo === 'camara' ) {
        return 'assets/images/camara.svg';
      }
    }

    return data;
  }
}
