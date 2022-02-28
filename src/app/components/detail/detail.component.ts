import { Component, Input, OnInit } from '@angular/core';
import { Cast, MovieDetail } from '@interfaces';
import { ModalController } from '@ionic/angular';
import { MoviesService } from '@services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() id: number;
  movieDetail: MovieDetail;
  cast: Cast[] = [];
  maxOverviewChars = 150;

  slidesOptions = {
    // spaceBetween: -5,
    slidesPerView: 3.3,
    freeMode: true,
  };

  constructor(private _moviesService: MoviesService, private modalController: ModalController) {}

  ngOnInit() {
    this._moviesService
      .getMovieDetail(this.id)
      .subscribe((detail) => (this.movieDetail = detail));
    this._moviesService
      .getMovieCredits(this.id)
      .subscribe(({ cast }) => (this.cast = cast));
  }

  back() {
    this.modalController.dismiss();
  }
}
