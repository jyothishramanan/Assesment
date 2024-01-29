import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { HeaderComponent } from './components/header/header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { FilmComponent } from './components/film/film.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { PeopleAggregateComponent } from './components/people-aggregate/people-aggregate.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    PeopleComponent,
    HomeComponent,
    VehicleDetailsComponent,
    HeaderComponent,
    PeopleDetailsComponent,
    PlanetComponent,
    PlanetDetailsComponent,
    FilmComponent,
    FilmDetailsComponent,
    StarshipComponent,
    StarshipDetailsComponent,
    PeopleAggregateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatProgressBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
