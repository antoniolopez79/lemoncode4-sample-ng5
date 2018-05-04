import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import { Place } from '../domain/place';
import { buildBasicAuth } from './auth-utils';

@Injectable()
export class PlaceService {

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
}
