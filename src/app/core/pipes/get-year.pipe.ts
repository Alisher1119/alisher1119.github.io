import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getYear'
})
export class GetYearPipe implements PipeTransform {

  transform(date: string): string {
    const now = Date.now();
    const time = now - new Date(date).getTime();
    return (time / 1000 / 365 / 24 / 3600).toPrecision(2);
  }
}
