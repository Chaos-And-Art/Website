import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTinySliderInstanceInterface, NgxTinySliderSettingsInterface } from 'ngx-tiny-slider';
import { BehaviorSubject, filter } from 'rxjs';
import { CarouselArtImage } from 'src/app/models/carouselArtImage';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  sliderHidden = true;
  artImages = new Array<CarouselArtImage>();
  tinySliderConfig!: NgxTinySliderSettingsInterface;

  imageLoadingProcess: BehaviorSubject<number> = new BehaviorSubject(0);

  @ViewChild("sliderLazy", { static: false })
  sliderLazy!: NgxTinySliderInstanceInterface;

  constructor() {
    this.artImages.push(
      { id: 1, src: "https://images.pexels.com/photos/3299386/pexels-photo-3299386.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "", alt: "" },
      { id: 2, src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "", alt: "" },
      { id: 3, src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "", alt: "" },
      { id: 4, src: "https://images.pexels.com/photos/2627945/pexels-photo-2627945.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "", alt: "" },
      { id: 5, src: "https://images.pexels.com/photos/4311512/pexels-photo-4311512.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "", alt: "" },
      { id: 6, src: "https://images.pexels.com/photos/7799298/pexels-photo-7799298.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "", alt: "" },
      { id: 7, src: "https://images.pexels.com/photos/9723176/pexels-photo-9723176.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", title: "", alt: "" },
    )
  }


  ngOnInit(): void {
    this.tinySliderConfig = {
      controlsContainer: "#customize-controls",
      waitForDom: true,
      autoWidth: true,
      gutter: 10,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayButtonOutput: false,
      // lazyload: true,
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
        this.sliderHidden = false;
        console.log("image loaded", next);
      });
  }

  onImgLoadSuccess() {
    const incLoadedCount = this.imageLoadingProcess.getValue() + 1;
    this.imageLoadingProcess.next(incLoadedCount);
  }
}