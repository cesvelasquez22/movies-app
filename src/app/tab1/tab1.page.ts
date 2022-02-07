import { Component, OnInit } from '@angular/core';
import { Movie } from '@interfaces';
import { MoviesService } from '@services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  latestMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService
      .getFeatures()
      .subscribe(({ results }) => (this.latestMovies = results));

    this._moviesService
      .getPopularMovies()
      .subscribe(({ results }) => (this.popularMovies = results));
  }
}
