import { Component, OnInit } from '@angular/core';
import { Page, Selected, SelectedTab } from 'src/app/models/selectedTab';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})

export class ArtComponent implements OnInit {

  recentData: SelectedTab = { id: 0, page: Page.Art, selected: Selected.RecentlyAdded }
  photoData: SelectedTab = { id: 1, page: Page.Art, selected: Selected.Photos }
  videoData: SelectedTab = { id: 2, page: Page.Art, selected: Selected.Videos }
  drawingData: SelectedTab = { id: 3, page: Page.Art, selected: Selected.Drawings }
  paintingData: SelectedTab = { id: 4, page: Page.Art, selected: Selected.Paintings }

  constructor() { }

  ngOnInit(): void {
  }
}
