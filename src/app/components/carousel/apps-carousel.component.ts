import { Component, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/models/carouselImage';

import SwiperCore, {
  SwiperOptions, Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller,
} from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Zoom, Autoplay, Thumbs, Controller]);

@Component({
  selector: 'app-apps-carousel',
  templateUrl: './apps-carousel.component.html',
  styleUrls: ['./apps-carousel.component.scss']
})
export class AppsCarouselComponent implements OnInit {
  appImages = new Array<CarouselImage>();

  swiperConfig: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: true,
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };

  constructor() {
    this.appImages.push(
      { id: 1, imgSrc: "/assets/images-videos/compressed/apps/2048.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_2048.jpg" },
      { id: 2, imgSrc: "/assets/images-videos/compressed/apps/Balls.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_balls.jpg" },
      { id: 3, imgSrc: "/assets/images-videos/compressed/apps/Notes_1.jpg", imgLazy: "/assets/images-videos/tiny/apps/tiny_notes.jpg" },
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

  ngOnInit(): void { }

}
