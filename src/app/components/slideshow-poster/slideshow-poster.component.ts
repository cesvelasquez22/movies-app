import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interfaces';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {
  @Input() title = '';
  @Input() movies: Movie[] = [];
  slidesOptions = {
    slidesPerView: 3.3,
    freeMode: true,
  };

  constructor() {}

  ngOnInit() {}
}
