import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) {}

  getPlanetDetails() {
    return this.http.get(`${api.api}PlanetProxy`);
  }

  getPlanetDetailsWithNumber(vehicleNumber: number | string | null) {
    debugger;
    return this.http.get(`${api.api}PlanetProxy/GetDetails/?url=`+''+vehicleNumber+'');
  }
}
