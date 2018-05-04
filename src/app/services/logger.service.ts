import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() {}

  log(m: string) {
    console.log(m);
  }
  error(m: string) {
    console.error(m);
  }
  warn(m: string) {
    console.warn(m);
  }

}
