import { Pipe, PipeTransform } from '@angular/core';

/** Requisitos:
 *
 *  {{ total | currency:'EUR' }}    123 ->  123.00 EUR
 *  {{ total | currency:'eur' }}    123 ->  123.00 EUR
 *  {{ total | currency:'USD' }}    123.347 ->  $ 123.35
 *  {{ total | currency }}          123 ->  123.00 EUR
 */

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, moneda: string): string {
    const currency = ((moneda) ?  moneda : 'EUR').toLowerCase();

    if (!value) {
      return '-';
    }
    switch (currency) {
      case 'eur':
        return value.toFixed(2) + ' EUR';
      case 'usd':
      return '$ ' + value.toFixed(2);
      default:
        return value.toString();
    }
  }

}
