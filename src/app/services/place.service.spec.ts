import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/Observable/from';
import 'rxjs/add/operator/map';

import { PlaceService } from './place.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Place, Location } from '../domain/place';

const loc: Location = {
  type: 'Point',
  coordinates: [12, 34.45]
};

const mockPlaces: Place[] = [
  { name: 'abc', image: 'a4.png', _id: '1234', location: loc, address: 'a',  city: 'a' },
  { name: 'b', image: 'a3.png', _id: '1235', location: loc, address: 'a',  city: 'a' },
  { name: 'c', image: 'a2.png', _id: '1236', location: loc, address: 'a',  city: 'a' },
  { name: 'd', image: 'a1.png', _id: '1237', location: loc, address: 'a',  city: 'a' },
];

class HttClientMock {
    get(url, options): Observable<any> {
      const obs = Observable.create(mockPlaces);
      return obs;
    }
}


describe('PlaceService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        PlaceService,
        { provide: HttpClient, useClass: HttClientMock }
      ]
    });
  });

  it('should be created', inject([PlaceService], (service: PlaceService) => {
    expect(service).toBeTruthy();
  }));

  xit('ask for Places', inject([PlaceService], (service: PlaceService) => {
      service.getPlaces().subscribe(
        data => {
            expect(data.length).toEqual(4);
        }
      );
  }));

  it('preparePlace works', inject([PlaceService], (service: PlaceService) => {
    const result = service.preparePlace({
      name: 'n1',
      image: '/api/image.png'
    });

    expect(result.name).toEqual('n1');
    expect(result.image).toContain('?apikey=1234');
    expect(result.image).toContain('https://');

  }));


});
