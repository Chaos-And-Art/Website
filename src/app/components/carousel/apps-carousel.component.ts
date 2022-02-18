import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTinySliderInstanceInterface, NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { BehaviorSubject, filter } from 'rxjs';
import { CarouselImage } from 'src/app/models/carouselImage';

@Component({
  selector: 'app-apps-carousel',
  templateUrl: './apps-carousel.component.html',
  styleUrls: ['./apps-carousel.component.scss']
})
export class AppsCarouselComponent implements OnInit {
  sliderHidden = true;
  appImages = new Array<CarouselImage>();
  appsTinySliderConfig!: NgxTinySliderSettingsInterface;

  imageLoadingProcess: BehaviorSubject<number> = new BehaviorSubject(0);

  @ViewChild("sliderLazy", { static: false })
  sliderLazy!: NgxTinySliderInstanceInterface;

  constructor() {
    this.appImages.push(
      { id: 1, imgSrc: "/assets/images-videos/compressed/apps/2048.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_2048.jpg" },
      { id: 2, imgSrc: "/assets/images-videos/compressed/apps/Balls.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_balls.jpg" },
      { id: 3, imgSrc: "/assets/images-videos/compressed/apps/Notes.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_notes.jpg" },
      { id: 4, imgSrc: "/assets/images-videos/compressed/apps/Spinner.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_spinner.jpg" },
      { id: 5, imgSrc: "/assets/images-videos/compressed/apps/Weather.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_weather.jpg" }
    )

    // this.appImages.push(
    //   { id: 1, imgSrc: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "/assets/_misc/default.png" },
    //   { id: 2, imgSrc: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "/assets/_misc/default.png" },
    //   { id: 3, imgSrc: "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "/assets/_misc/default.png" },
    //   { id: 4, imgSrc: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "/assets/_misc/default.png" },
    //   { id: 5, imgSrc: "https://images.pexels.com/photos/2400594/pexels-photo-2400594.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "/assets/_misc/default.png" },
    //   { id: 6, imgSrc: "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "/assets/_misc/default.png" },
    //   { id: 7, imgSrc: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "/assets/_misc/default.png" },
    // )
  }


  ngOnInit(): void {
    this.appsTinySliderConfig = {
      controlsContainer: "#apps-controls",
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
          gutter: 10,
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
      .pipe(filter((count: number) => count === this.appImages.length))
      .subscribe(next => {
        this.sliderLazy.domReady.next(1);
      });
  }

  loadedImages = 0;
  secondPhase = false;
  onImgLoadSuccess() {
    this.loadedImages++;
    const incLoadedCount = this.imageLoadingProcess.getValue() + 1;
    this.imageLoadingProcess.next(incLoadedCount);
    if (this.loadedImages >= 4 && this.secondPhase == false) {
      this.sliderHidden = false;

      var lazyImages = [].slice.call(document.querySelectorAll("img.lazy-apps"));
      var correctImage: HTMLImageElement[] = [];
      lazyImages.forEach((image: HTMLImageElement) => {
        correctImage.push(image)
      });

      for (let i = 0; i < correctImage.length; i++) {
        correctImage[i].dataset['src'] = this.appImages[i].imgSrc
      }
      this.loadedImages = 0
      this.secondPhase = true;
    }
  }

}
