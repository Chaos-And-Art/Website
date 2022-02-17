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
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_bridge.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_bridge.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_city.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_city.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_canyon.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_canyon.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/photos/landscape/original_clouds.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_clouds.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/photos/landscape/original_ferns.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_ferns.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_city.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_city.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/photos/landscape/original_forest.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_forest.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_light.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_light.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_hut.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_hut.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_leaf.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_leaf.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_ocean.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_ocean.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_pink.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_pink.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/photos/portrait/original_mountain.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_mountain.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_rain.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_rain.jpg" },
      { id: 0, type: ImageType.Photo, new: true, imgSrc: "/assets/images-videos/original/photos/portrait/original_downtown.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_downtown.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_road.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_road.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_space.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_space.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_village.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_village.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_rocks.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_rocks.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_stars.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_stars.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_flower.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_flower.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_valley.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_valley.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/landscape/original_ship.jpg", imgLazy: "/assets/images-videos/tiny/photos/landscape/tiny_ship.jpg" },
      { id: 0, type: ImageType.Photo, new: false, imgSrc: "/assets/images-videos/original/photos/portrait/original_trees.jpg", imgLazy: "/assets/images-videos/tiny/photos/portrait/tiny_trees.jpg" },

      // { id: 0, type: ImageType.Video, new: false, imgSrc: "/assets/images-videos/Video/Landscape/large_flowingWater.mp4", imgLazy: "" },
      // { id: 0, type: ImageType.Video, new: false, imgSrc: "/assets/images-videos/Video/Landscape/large_lightDarkSmoke.mp4", imgLazy: "" },
      // { id: 0, type: ImageType.Video, new: false, imgSrc: "/assets/images-videos/Video/Portrait/large_cityTimelapse.mp4", imgLazy: "" },
      { id: 0, type: ImageType.Drawing, new: true, imgSrc: "/assets/images-videos/original/drawings/portrait/original_drawing_huskyPuppy.jpg", imgLazy: "/assets/images-videos/tiny/drawings/portrait/tiny_drawing_huskyPuppy.jpg" },
      { id: 0, type: ImageType.Painting, new: false, imgSrc: "/assets/images-videos/original/paintings/landscape/original_painting_digital_valley.jpg", imgLazy: "/assets/images-videos/tiny/paintings/landscape/tiny_painting_digital_valley.jpg" },
      { id: 0, type: ImageType.Painting, new: false, imgSrc: "/assets/images-videos/original/paintings/landscape/original_painting_shapes.jpg", imgLazy: "/assets/images-videos/original/paintings/landscape/original_painting_shapes.jpg" },
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
