import { Component, OnInit } from '@angular/core';
import { Movie } from '@interfaces';
import { MoviesService } from '@services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  latestMovies$: Observable<Movie[]>;
  popularMovies$: Observable<Movie[]>;

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.latestMovies$ = this._moviesService
      .getLatestMovies()
      .pipe(map(({ results }) => results));

    this.popularMovies$ = this._moviesService.popularMovies$;
    this._getPopularMovies();
  }

  loadMore() {
    this._getPopularMovies();
  }

  private _getPopularMovies() {
    this._moviesService.getPopularMovies().subscribe();
  }
}
