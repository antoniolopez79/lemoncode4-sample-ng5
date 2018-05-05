import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


import { environment } from '../environments/environment';
import { PlaceService } from './services/place.service';
import { SponsorService } from './services/sponsor.service';

import { Sponsor } from './domain/sponsor';
import { Place } from './domain/place';
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
  animations: [
    trigger('activedPlace', [
      state('noselect', style({
        backgroundColor: '#eeeeee', transform: 'scale(1)', left: '0px'
      })),
      state('select',   style({
        backgroundColor: '#cfd8dc', transform: 'scale(1.1)', left: '500px'
      })),
      transition('noselect => select', animate('500ms ease-in')),
      transition('select => noselect', animate('500ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  pi = 3.14;

  user: User;

  places: Place[] = [];
  sponsors: Sponsor[] = [];
  error: string;

  constructor(private placeService: PlaceService,
              private sponsorService: SponsorService,
              private logger: LoggerService
            ) {
    if (environment.production) {
      this.logger.log('production');
    }
    this.logger.log('hola');

    this.user = new User('Ana', 'Lopez', 'user');
  }

  ngOnInit() {
    this.loadPlaces();
    this.loadSponsors();
  }

  toggleSelection(place: Place) {
    place.selection = !place.selection;
  }

  getAnimationState(place: Place) {
    if (place.selection) {
      return 'select';
    }
    return 'noselect';
  }

  loadSponsors() {
    this.sponsorService.getSponsors().subscribe(
      data => { this.onSponsors(data); },
      error => { this.handleError(error); }
    );
  }

  onSponsors(data: Sponsor[]): void {
    this.sponsors = data;
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
    this.error = error.message;
  }

  onLogout(event: any) {
    this.logger.log('La aplicacion hace logout para el usuario:' + event.n);
  }
}
