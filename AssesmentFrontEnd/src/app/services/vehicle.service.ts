import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from '../config/api.config';
@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicleDetails() {
    return this.http.get(`${api.api}VehicleProxy`);
  }

  getVehicleDetailsWithNumber(vehicleNumber: number | string | null) {
    debugger;
    return this.http.get(`${api.api}VehicleProxy/GetDetails?url=`+''+vehicleNumber+'');
  }
}
