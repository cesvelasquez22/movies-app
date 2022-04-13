import { Component, Input, OnInit } from '@angular/core';
import { Cast, MovieDetail } from '@interfaces';
import { ModalController } from '@ionic/angular';
import { MoviesService, StorageService } from '@services';

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

  public readonly existsMovieAtFavorites = (id: number) => this._storageService.existsMovieAtFavorites(id);

  constructor(private _moviesService: MoviesService, private modalController: ModalController, private _storageService: StorageService) {}

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

  favorite() {
    this._storageService.saveOrRemoveMovie(this.movieDetail);
  }
}
