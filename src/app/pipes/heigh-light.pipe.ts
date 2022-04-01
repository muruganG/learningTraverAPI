import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heighLight'
})
export class HeighLightPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value;
  }

}
