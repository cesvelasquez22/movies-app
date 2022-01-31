import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interfaces';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})
export class SlideComponent implements OnInit {
  @Input() movie: Movie;
  @Input() pathType = 'backdrop_path';

  constructor() { }

  ngOnInit() {}

}
