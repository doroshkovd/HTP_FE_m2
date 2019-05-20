import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mult'
})
export class MultPipe implements PipeTransform {

  transform(value: any, num: any = 1): any {

    return value * num;
  }

}
