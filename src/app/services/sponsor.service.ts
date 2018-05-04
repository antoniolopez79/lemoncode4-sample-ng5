import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sponsor } from '../domain/sponsor';
import { Observable} from 'rxjs/Observable';
import { buildBasicAuth } from './auth-utils';
import { environment } from '../../environments/environment';


@Injectable()
export class SponsorService {

  constructor(private http: HttpClient) { }

  getSponsors(): Observable<Sponsor[]> {
    const url = environment.serverUrl + '/api/sponsors';
    const options = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': buildBasicAuth(environment.user, environment.password)
      }
    };

    return this.http.get(url, options)
               .map(d => <Sponsor[]> d);
  }

}
