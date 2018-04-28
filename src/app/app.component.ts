import { Component } from '@angular/core';
import { environment } from '../environments/environment';

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
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  user: User;

  constructor() {
    if (environment.production) {
      console.log('production');
    }
    console.log('hola');

    this.user = new User('Ana', 'Lopez', 'user');

  }

  onLogout(event: any) {
    console.log('La aplicacion hace logout para el usuario:' + event.n);
  }
}
