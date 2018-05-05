import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from '../domain/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.component.html',
  styleUrls: ['./place-detail.component.scss']
})
export class PlaceDetailComponent implements OnInit {
  id: string;
  place: Place;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private placeService: PlaceService
            ) {
    activatedRoute.params.subscribe(
      parametros => {
        this.id = parametros['id'];
        this.getPlace(this.id);
      }
    );
  }

  getPlace(id: string) {
    this.placeService.getPlace(id).subscribe(
      d => {
        this.place = d;
      },
      err => console.error(err)
    );
  }

  ngOnInit() {
  }

}
