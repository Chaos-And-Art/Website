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
      { id: 1, imgSrc: "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
      { id: 2, imgSrc: "https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
      { id: 3, imgSrc: "https://images.pexels.com/photos/4220967/pexels-photo-4220967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
      { id: 4, imgSrc: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
      { id: 5, imgSrc: "https://images.pexels.com/photos/2400594/pexels-photo-2400594.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
      { id: 6, imgSrc: "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
      { id: 7, imgSrc: "https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", imgLazy: "" },
    )
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
      .pipe(filter((count: number) => count === this.appImages.length))
      .subscribe(next => {
        this.sliderLazy.domReady.next(1);
        this.sliderHidden = false;
      });
  }

  onImgLoadSuccess() {
    const incLoadedCount = this.imageLoadingProcess.getValue() + 1;
    this.imageLoadingProcess.next(incLoadedCount);
  }

}
