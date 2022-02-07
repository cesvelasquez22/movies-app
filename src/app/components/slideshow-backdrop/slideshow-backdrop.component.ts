import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interfaces';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() title = '';
  @Input() movies: Movie[] = [];

  slidesOptions = {
    slidesPerView: 1.1,
    freeMode: true,
  };

  constructor() { }

  ngOnInit() {}

}
