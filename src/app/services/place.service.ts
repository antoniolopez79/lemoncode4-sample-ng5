import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Place } from '../domain/place';
import { buildBasicAuth } from './auth-utils';
import { environment } from '../../environments/environment';

@Injectable()
export class PlaceService {
  places: Place[];


  constructor(private http: HttpClient) {
  }

  getPlaces(): Observable<Place[]> {
    const url = 'https://openapi3.herokuapp.com/api/places/';
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': buildBasicAuth('demo', 'demo')
    };

    return this.http.get(url, { headers: headers})
               .map(d => {
                 return <Place[]> d;
               });
  }

  getPlace(id: string): Observable<Place> {
    const url = 'https://openapi3.herokuapp.com/api/places/' + encodeURIComponent(id);
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': buildBasicAuth('demo', 'demo')
    };

    return this.http.get(url, { headers: headers})
               .map(d => {
                 return this.preparePlace(d);
               });
  }

  preparePlace(d: any): Place {
    const place = <Place> d;

    place.image = environment.serverUrl + place.image + '?apikey=1234';

    return place;
  }
}
