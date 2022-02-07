import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '@interfaces';

@Component({
  selector: 'app-slideshow-col',
  templateUrl: './slideshow-col.component.html',
  styleUrls: ['./slideshow-col.component.scss'],
})
export class SlideshowColComponent implements OnInit {
  @Input() title = '';
  @Input() movies: Movie[] = [];
  slidesOptions = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -8,
  };

  constructor() { }

  ngOnInit() {}

}
