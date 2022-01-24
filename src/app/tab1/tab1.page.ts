import { Component, OnInit } from '@angular/core';
import { MoviesService } from '@services';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
      this._moviesService.getFeatures().subscribe(console.log);
  }

}
