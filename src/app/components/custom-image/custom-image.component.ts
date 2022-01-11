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
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_bridge.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_city.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_canyon.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_clouds.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_ferns.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_city.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_forest.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_downtown.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_light.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_hut.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_ocean.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_pink.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_mountain.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_rain.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_road.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/landscape/large_bridge.jpg" },
      { id: 0, imgSrc: "/assets/images-videos/original/large/portrait/large_space.jpg" },

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
