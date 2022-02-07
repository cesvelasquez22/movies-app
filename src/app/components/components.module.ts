import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '@pipes';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideComponent } from './slide/slide.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideComponent,
    HeaderComponent,
  ],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent],
  imports: [CommonModule, IonicModule, PipesModule],
})
export class ComponentsModule {}
