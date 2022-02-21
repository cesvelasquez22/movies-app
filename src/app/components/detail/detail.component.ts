import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '@services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id: number;

  constructor(private _moviesService: MoviesService) {}

  ngOnInit() {
    this._moviesService.getMovieDetail(this.id).subscribe(console.log);
    this._moviesService.getMovieCredits(this.id).subscribe(console.log);
  }
}
