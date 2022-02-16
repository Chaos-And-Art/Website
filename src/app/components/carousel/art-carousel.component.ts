import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTinySliderInstanceInterface, NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { BehaviorSubject, filter } from 'rxjs';
import { CarouselImage } from 'src/app/models/carouselImage';

@Component({
  selector: 'app-art-carousel',
  templateUrl: './art-carousel.component.html',
  styleUrls: ['./art-carousel.component.scss']
})
export class ArtCarouselComponent implements OnInit {
  sliderHidden = true;
  artImages = new Array<CarouselImage>();
  artTinySliderConfig!: NgxTinySliderSettingsInterface;

  imageLoadingProcess: BehaviorSubject<number> = new BehaviorSubject(0);

  @ViewChild("sliderLazy", { static: false })
  sliderLazy!: NgxTinySliderInstanceInterface;

  constructor() {
    this.artImages.push(
      { id: 0, imgSrc: "/assets/images-videos/original/photos/landscape/original_city.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_city.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/photos/landscape/original_clouds.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_clouds.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/photos/landscape/original_ferns.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_ferns.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/photos/landscape/original_forest.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_forest.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/photos/landscape/original_hut.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_hut.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/photos/landscape/original_ocean.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_ocean.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/photos/landscape/original_bridge.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_bridge.jpg" },
    )
  }


  ngOnInit(): void {
    this.artTinySliderConfig = {
      controlsContainer: "#art-controls",
      waitForDom: true,
      autoWidth: true,
      gutter: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayButtonOutput: false,
      lazyload: true,
      mouseDrag: true,
      controls: true,
      nav: false,
      slideBy: 1,
      speed: 400,
      responsive: {
        320: {
          items: 1.15,
          gutter: 5,
          center: true,
        },
        375: {
          items: 1.15,
          gutter: 8,
          center: true,
        },
        425: {
          items: 1.2,
          gutter: 10,
          center: true,
        },
        768: {
          items: 2,
          gutter: 10,
          center: true,
        },
        1024: {
          items: 3,
          gutter: 10,
          center: true,
        },
        1440: {
          items: 3,
          gutter: 10,
          center: true,
        },
        2560: {
          items: 5,
          gutter: 10,
          center: true,
        },
      }
    };
    this.trackImageLoading();
  }

  trackImageLoading() {
    this.imageLoadingProcess
      .pipe(filter((count: number) => count === this.artImages.length))
      .subscribe(next => {
        this.sliderLazy.domReady.next(1);
      });
  }

  loadedImages = 0;
  onImgLoadSuccess() {
    this.loadedImages++;
    const incLoadedCount = this.imageLoadingProcess.getValue() + 1;
    this.imageLoadingProcess.next(incLoadedCount);
    if (this.loadedImages >= 6) {
      this.sliderHidden = false;

      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy-art"));
      var correctImage: HTMLImageElement[] = [];
      lazyImages.forEach((image: HTMLImageElement) => {
        correctImage.push(image)
      });

      for (let i = 0; i < correctImage.length; i++) {
        correctImage[i].dataset['src'] = this.artImages[i].imgSrc
      }
      this.loadedImages = 0
    }
  }
}