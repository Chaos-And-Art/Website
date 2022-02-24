import { Component, OnInit, ViewChild } from '@angular/core';
import { CarouselImage } from 'src/app/models/carouselImage';

import SwiperCore, {
  SwiperOptions, Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller, Lazy,
} from 'swiper';
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller, Lazy]);

@Component({
  selector: 'app-art-carousel',
  templateUrl: './art-carousel.component.html',
  styleUrls: ['./art-carousel.component.scss']
})
export class ArtCarouselComponent implements OnInit {
  artImages = new Array<CarouselImage>();
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  navigation = false;
  log(log: string) {
    // console.log(string);
  }
  breakpoints = {
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 4, spaceBetween: 40 },
    1024: { slidesPerView: 4, spaceBetween: 50 },
  };
  // indexNumber: any;
  show?: boolean;
  scrollbar: any = false;
  slides = Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`);

  swiperConfig: SwiperOptions = {
    navigation: true,
    loop: true,
    centeredSlides: true,
    centeredSlidesBounds: true,
    allowTouchMove: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchOverflow: true,
    lazy: true,

    breakpoints: {
      320: {
        slidesPerView: 1.05,
        spaceBetween: 5,
      },
      375: {
        slidesPerView: 1.15,
        spaceBetween: 18,
      },
      425: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      2560: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    }
  };


  constructor() {
    this.artImages.push(
      { id: 0, imgSrc: "/assets/images-videos/compressed/photos/landscape/city.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_city.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/compressed/photos/landscape/clouds.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_clouds.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/compressed/photos/landscape/ferns.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_ferns.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/compressed/photos/landscape/forest.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_forest.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/compressed/photos/landscape/hut.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_hut.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/compressed/photos/landscape/ocean.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_ocean.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/compressed/photos/landscape/bridge.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_bridge.jpg" },
    )
  }


  ngOnInit(): void { }

  // this.artTinySliderConfig = {
  //   controlsContainer: "#art-controls",
  //   waitForDom: true,
  //   autoWidth: true,
  //   gutter: 10,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 6000,
  //   autoplayButtonOutput: false,
  //   lazyload: true,
  //   mouseDrag: true,
  //   controls: true,
  //   nav: false,
  //   slideBy: 1,
  //   speed: 400,
  //   responsive: {
  //     320: {
  //       items: 1.15,
  //       gutter: 5,
  //       center: true,
  //     },
  //     375: {
  //       items: 1.15,
  //       gutter: 8,
  //       center: true,
  //     },
  //     425: {
  //       items: 1.2,
  //       gutter: 10,
  //       center: true,
  //     },
  //     768: {
  //       items: 2,
  //       gutter: 10,
  //       center: true,
  //     },
  //     1024: {
  //       items: 3,
  //       gutter: 10,
  //       center: true,
  //     },
  //     1440: {
  //       items: 3,
  //       gutter: 10,
  //       center: true,
  //     },
  //     2560: {
  //       items: 5,
  //       gutter: 10,
  //       center: true,
  //     },
  //   }
  // };
}