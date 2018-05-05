import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'place/:id', component: PlaceDetailComponent },
  { path: '**', component: AboutComponent },
];
export const routing = RouterModule.forRoot(routes);
