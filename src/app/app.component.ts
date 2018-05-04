import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { LoggerService } from './services/logger.service';

class User {
  name: string;
  lastname: string;
  role: string;

  constructor(n: string, l: string, r: string) {
    this.name = n;
    this.role = r;
    this.lastname = l;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [ LoggerService ]
})
export class AppComponent {
  title = 'app';

  pi = 3.14;

  user: User;

  constructor(private logger: LoggerService) {
    if (environment.production) {
      this.logger.log('production');
    }
    this.logger.log('hola');

    this.user = new User('Ana', 'Lopez', 'user');

  }

  onLogout(event: any) {
    this.logger.log('La aplicacion hace logout para el usuario:' + event.n);
  }
}
