import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  pure: true
})
export class StatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === false) return 'Open';
    return 'Closed';
  }
}
