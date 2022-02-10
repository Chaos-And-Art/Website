import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomImage, ImageType } from 'src/app/models/customImage';
import { Selected } from 'src/app/models/selectedTab';


@Component({
  selector: 'app-custom-image',
  templateUrl: './custom-image.component.html',
  styleUrls: ['./custom-image.component.scss']
})
export class CustomImageComponent implements OnInit {

  @Input() data: any;
  images = new Array<CustomImage>();
  imageData: any = [];

  constructor(public router: Router) {
    this.images.push(
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/landscape/large_bridge.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_bridge.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/landscape/large_city.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_city.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/portrait/large_canyon.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_canyon.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/large/landscape/large_clouds.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_clouds.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/large/landscape/large_ferns.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_ferns.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/portrait/large_city.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_city.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/large/landscape/large_forest.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_forest.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/portrait/large_light.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_light.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/landscape/large_hut.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_hut.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/landscape/large_ocean.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_ocean.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/landscape/large_pink.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_pink.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/large/portrait/large_mountain.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_mountain.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/landscape/large_rain.jpg", imgLazy: "/assets/images-videos/original/small/landscape/small_rain.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/large/portrait/large_downtown.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_downtown.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/portrait/large_road.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_road.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/large/portrait/large_space.jpg", imgLazy: "/assets/images-videos/original/small/portrait/small_space.jpg" },

      // { id: 0, type: ImageType.Video, new: false, imgSrc: "/assets/images-videos/Video/Landscape/large_flowingWater.mp4", imgLazy: "" },
      // { id: 0, type: ImageType.Video, new: false, imgSrc: "/assets/images-videos/Video/Landscape/large_lightDarkSmoke.mp4", imgLazy: "" },
      // { id: 0, type: ImageType.Video, new: false, imgSrc: "/assets/images-videos/Video/Portrait/large_cityTimelapse.mp4", imgLazy: "" },
      { id: 0, type: ImageType.Drawing, new: true, imgSrc: "/assets/images-videos/Drawings/large_drawing_huskyPuppy.jpg", imgLazy: "/assets/images-videos/Drawings/small_drawing_huskyPuppy.jpg" },
      { id: 0, type: ImageType.Painting, new: false, imgSrc: "/assets/images-videos/Paintings/large_painting_digital_valley.jpg", imgLazy: "/assets/images-videos/Paintings/small_painting_digital_valley.jpg" },
      { id: 0, type: ImageType.Painting, new: false, imgSrc: "/assets/images-videos/Paintings/large_painting_shapes.jpg", imgLazy: "/assets/images-videos/Paintings/large_painting_shapes.jpg" },
    )
  }

  ngOnInit(): void {
    if (this.data.selected == Selected.RecentlyAdded) {
      this.images.forEach(image => {
        if (image.new == true) {
          this.imageData.push(image)
        }
      });
    } else if (this.data.selected == Selected.Photos) {
      this.images.forEach(image => {
        if (image.type == ImageType.Photo) {
          this.imageData.push(image)
        }
      });
    }
    else if (this.data.selected == Selected.Videos) {
      this.images.forEach(image => {
        if (image.type == ImageType.Video) {
          this.imageData.push(image)
        }
      });
    } else if (this.data.selected == Selected.Drawings) {
      this.images.forEach(image => {
        if (image.type == ImageType.Drawing) {
          this.imageData.push(image)
        }
      });
    } else if (this.data.selected == Selected.Paintings) {
      this.images.forEach(image => {
        if (image.type == ImageType.Painting) {
          this.imageData.push(image)
        }
      });
    }
  }
}
