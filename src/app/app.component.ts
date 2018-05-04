import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { Place } from './domain/place';
import { PlaceService } from './services/place.service';

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
export class AppComponent implements OnInit {
  title = 'app';

  user: User;

  places: Place[] = [];

  constructor(private placeService: PlaceService) {
    if (environment.production) {
      console.log('production');
    }
    console.log('hola');

    this.user = new User('Ana', 'Lopez', 'user');
  }

  ngOnInit() {
    this.loadPlaces();
  }

  loadPlaces() {
    this.placeService.getPlaces().subscribe(
      data => this.onPlaces(data),
      error => this.handleError(error)
    );
  }
  onPlaces(places: Place[]): void {
    this.places = places;
  }
  handleError(error: any): void {
    console.error(error);
  }

  onLogout(event: any) {
    console.log('La aplicacion hace logout para el usuario:' + event.n);
  }
}
