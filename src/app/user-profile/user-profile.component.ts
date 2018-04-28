import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter, style } from '@angular/core';

// class User {
//   private name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// equivalente a la anterior
class User {
  constructor(public name: string, public age: number) {
  }
}


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit, OnDestroy, OnChanges {
  @Input() name: string;
  @Input() lastname: string;
  @Input() role: string;
  @Output() logout = new EventEmitter();

  users: User[];

  constructor() { }

  ngOnInit() {
    // this.name = 'Jesica';
    // this.lastname = 'Alba';
    // this.role = 'admin';

    this.users = [
      new User('Ana', 23),
      new User('Pablo', 23),
      new User('Jorge', 24),
      new User('Ana2', 25),
      new User('Ana3', 26),
      new User('Ana4', 27),
      new User('Ana5', 28),
    ];
  }
  ngOnDestroy() {
    // destruccion
  }
  ngOnChanges(change) {
  }

  onSelect(u: User): void {
    u.age = u.age + 1;
  }

  onClick() {
    console.log('el usuario hizo logout');
    this.logout.emit({
      n: this.name,
      l: this.lastname,
      r: this.role
    });
  }

}
