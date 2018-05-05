import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceService } from './services/place.service';
import { SponsorService } from './services/sponsor.service';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { CurrencyPipe } from './pipes/currency.pipe';
import { MyHighlightDirective } from './directives/my-highlight.directive';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlaceDetailComponent } from './place-detail/place-detail.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CurrencyPipe,
    MyHighlightDirective,
    HomeComponent,
    AboutComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [
    PlaceService,
    SponsorService,
    // LoggerService
    { provide: LoggerService, useClass: LoggerService }  // produccion
    // { provide: LoggerService, useClass: Logger2Service } // testing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
