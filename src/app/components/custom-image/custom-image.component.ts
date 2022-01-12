import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CustomImage } from 'src/app/models/customImage';


@Component({
  selector: 'app-custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.scss']
})
export class CustomImageComponent implements OnInit {

  @Input() data: any;
  images = new Array<CustomImage>();

  constructor(public router: Router) {
    this.images.push(
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_bridge.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_bridge.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_city.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_city.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_canyon.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_canyon.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_clouds.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_clouds.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_ferns.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_ferns.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_city.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_city.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_forest.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_forest.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_downtown.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_downtown.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_light.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_light.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_hut.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_hut.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_ocean.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_ocean.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_pink.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_pink.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_mountain.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_mountain.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_rain.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_rain.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_road.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_road.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_bridge.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_bridge.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_space.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_space.jpg" },

      // { id: 1, imgSrc: "https://picsum.photos/200/300" },
      // { id: 2, imgSrc: "https://picsum.photos/300/400" },
      // { id: 3, imgSrc: "https://picsum.photos/400/300" },
      // { id: 4, imgSrc: "https://picsum.photos/200/350" },
      // { id: 5, imgSrc: "https://picsum.photos/200/400" },
      // { id: 6, imgSrc: "https://picsum.photos/200/450" },
      // { id: 7, imgSrc: "https://picsum.photos/300/300" },
      // { id: 8, imgSrc: "https://picsum.photos/300" },
      // { id: 9, imgSrc: "https://picsum.photos/200" },
      // { id: 10, imgSrc: "https://picsum.photos/400" },
      // { id: 11, imgSrc: "https://picsum.photos/500" },
    )
  }

  ngOnInit(): void {
  }

}
