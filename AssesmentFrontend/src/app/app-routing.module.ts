import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { PeopleComponent } from './components/people/people.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { FilmComponent } from './components/film/film.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { StarshipComponent } from './components/starship/starship.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';
import { PlanetDetailsComponent } from './components/planet-details/planet-details.component';
import { PeopleAggregateComponent } from './components/people-aggregate/people-aggregate.component';

const routes: Routes = [
  { path: '', redirectTo: 'vehicle', pathMatch: 'full' },
  { path: 'vehicle', component: VehicleComponent },
  { path: 'vehicle/details', component: VehicleDetailsComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'people/details', component: PeopleDetailsComponent },
  { path: 'planet', component: PlanetComponent },
  { path: 'planet/details', component: PlanetDetailsComponent },
  { path: 'film', component: FilmComponent },
  { path: 'film/details', component: FilmDetailsComponent },
  { path: 'starship', component: StarshipComponent },
  { path: 'starship/details', component: StarshipDetailsComponent },
  { path: 'peopleaggregate', component: PeopleAggregateComponent },


  { path: '**', redirectTo: 'vehicle' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
