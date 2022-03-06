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
  
  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this.populars$ = this._moviesService.popularMovies$;
    this._moviesService.getPopularMovies().subscribe();
  }

  onSearchChange(event) {
    const value = event.detail.value;
    console.log(value);
  }

  onClick(value: string) {
    this.search = value;
  }
}
