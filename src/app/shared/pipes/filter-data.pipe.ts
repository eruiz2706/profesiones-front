import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  transform(data: any, args?: any): any {

    /*return data.filter( item => {
      return item.nombre.toLowerCase().indexOf( search.toLowerCase()) !== -1 ;
    });*/
    const keys = args.keys || [];
    const lowSearch = (args.search || '').toLowerCase();
    return data.filter( (item) => {
        return keys.some( key =>
            String(item[key]).toLowerCase().includes(lowSearch)
        );
    });
  }

}
