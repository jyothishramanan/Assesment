import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {}

  getPeopleDetails() {
    return this.http.get(`${api.api}PeopleProxy`);
  }

  getPeopleDetailsWithNumber(vehicleNumber: number | string | null) {
    debugger;
    return this.http.get(`${api.api}PeopleProxy/GetDetails/?url=`+''+vehicleNumber+'');
  }
  getPeopleAggregateDetails(vehicleNumber: number | string | null) {
    debugger;
    return this.http.get(`${api.api}PeopleAggregate/GetDetails/?url=`+''+vehicleNumber+'');
  }
}
