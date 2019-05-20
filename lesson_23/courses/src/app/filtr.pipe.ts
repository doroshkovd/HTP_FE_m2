import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtr'
})
export class FiltrPipe implements PipeTransform {

  transform(value: any[], filter: string, field: string): any {
    if (value.length === 0 || filter === '') {
      return value;
    }

    return value.filter((item) => {
      return item[field].toLowerCase().indexOf(filter.toLowerCase()) !== -1
    });
  }

}
