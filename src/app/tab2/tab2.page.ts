import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@services';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  populars$: Observable<Movie[]>;
  search = '';
  searching = false;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.resetPopularMovies();
  }

  ngOnInit(): void {
    this.populars$ = this._moviesService.popularMovies$;
    this._moviesService.getPopularMovies().subscribe();
  }

  onSearchChange(event) {
    const search = event.detail.value;
    if (search.length > 0) {
      this._moviesService.searchMovies(search).subscribe(console.log);
    }
  }

  onClick(value: string) {
    this.search = value;
  }
}
