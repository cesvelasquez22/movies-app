import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MoviesResponse } from '../interfaces/movie.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getFeatures() {
    return this._http.get<MoviesResponse>(
      `${environment.MDB_API}/discover/movie?primary_release_date.gte=2021-12-01&primary_release_date.lte=2021-12-31&language=es&api_key=e29423940685c818f14f792946219644`
    );
  }
}
