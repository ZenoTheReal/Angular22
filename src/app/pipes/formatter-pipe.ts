import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatter',
})
export class FormatterPipe implements PipeTransform {
  transform(value: number): string {
    return value.toFixed(1) + ' ' + '°C' || '-';
  }
}
