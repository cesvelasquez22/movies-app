import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@services';
import { Movie } from '../interfaces/movie.interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  slidesOptions = {
    slidesPerView: 1.1,
    freeMode: true,
  };
  latestMovies: Movie[] = [];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService
      .getFeatures()
      .subscribe(({ results }) => (this.latestMovies = results));
  }
}
