import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor(private http: HttpClient) {}

  getStarshipDetails() {
    return this.http.get(`${api.api}StarshipProxy`);
  }

  getStarshipDetailsWithNumber(vehicleNumber: number | string | null) {
    debugger;
    return this.http.get(`${api.api}StarshipProxy/GetDetails?url=`+''+vehicleNumber+'');
  }
}
