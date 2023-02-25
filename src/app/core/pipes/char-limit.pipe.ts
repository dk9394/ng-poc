import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charLimit',
})
export class CharLimitPipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    let result = '';

    if (value.length < limit) {
      result = value;
    } else {
      result = `${value.slice(0, limit)} ...`;
    }

    return result;
  }
}
