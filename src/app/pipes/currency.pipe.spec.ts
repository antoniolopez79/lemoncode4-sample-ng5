import { CurrencyPipe } from './currency.pipe';

describe('CurrencyPipe', () => {

  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });


/** Requisitos:
 *
 *  {{ total | currency:'EUR' }}    123 ->  123,00 EUR
 *  {{ total | currency:'USD' }}    123.347 ->  $ 123,35
 */

  it('123 EUR should return  123.00 EUR', () => {
    const sut = new CurrencyPipe();

    const actual = sut.transform(123, 'EUR');

    expect(actual).toEqual('123.00 EUR');
  });

  it('123 null arguments should return  123.00 EUR', () => {
    const sut = new CurrencyPipe();

    const actual = sut.transform(123, null);

    expect(actual).toEqual('123.00 EUR');
  });


  it('123.347 USD should return $ 123.35', () => {
    const sut = new CurrencyPipe();

    const actual = sut.transform(123.347, 'USD');

    expect(actual).toEqual('$ 123.35');
  });

  it('null USD should return $ 123.35', () => {
    const sut = new CurrencyPipe();

    const actual = sut.transform(null, 'USD');

    expect(actual).toEqual('-');
  });


});
