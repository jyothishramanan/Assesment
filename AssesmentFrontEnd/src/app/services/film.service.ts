import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) {}

  getFilmDetails() {
    return this.http.get(`${api.api}FilimProxy`);
  }

  getFilmDetailsWithNumber(filmNumber: number | string | null) {
    debugger;
    return this.http.get(`${api.api}FilimProxy/GetDetails?url=`+''+filmNumber+'');
  }
}
