import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MoviesResponse } from '../interfaces/movie.interfaces';

const api_url = environment.MDB_API;
const api_key = environment.API_KEY;
const language = 'es';
const include_image_language = 'es';
const today = new Date();
const month = today.getMonth() + 1;
const last_day = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private _http: HttpClient) {}

  getFeatures() {
    let currentMonth;
    if (month < 10) {
      currentMonth = `0${month}`;
    } else {
      currentMonth = month;
    }
    const fromDate = `${today.getFullYear()}-${currentMonth}-01`;
    const toDate = `${today.getFullYear()}-${currentMonth}-${last_day}`;
    return this._executeQuery<MoviesResponse>(
      `/discover/movie?primary_release_date.gte=${fromDate}&primary_release_date.lte=${toDate}`
    );
  }

  private _executeQuery<T>(query: string) {
    return this._http.get<T>(`${api_url}${query}`, {
      params: {
        api_key,
        language,
        include_image_language,
      },
    });
  }
}
