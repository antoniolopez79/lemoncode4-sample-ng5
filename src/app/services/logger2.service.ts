import { Injectable } from '@angular/core';


const prefix = 'Logger2: ';

@Injectable()
export class Logger2Service {

  constructor() {}

  log(m: string) {
    console.log(prefix + m);
  }
  error(m: string) {
    console.error(prefix + m);
  }
  warn(m: string) {
    console.warn(prefix + m);
  }

}
