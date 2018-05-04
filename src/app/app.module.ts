import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceService } from './services/place.service';
import { SponsorService } from './services/sponsor.service';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { CurrencyPipe } from './pipes/currency.pipe';
import { MyHighlightDirective } from './directives/my-highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CurrencyPipe,
    MyHighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
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
