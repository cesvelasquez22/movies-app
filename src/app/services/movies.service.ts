import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }

  getFeatures() {
    return this._http.get(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-12-01&primary_release_date.lte=2021-12-31&language=es&api_key=e29423940685c818f14f792946219644`);
  }
}
