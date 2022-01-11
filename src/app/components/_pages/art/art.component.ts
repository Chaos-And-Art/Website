import { Component, OnInit } from '@angular/core';
import { Page, Selected, SelectedTab } from 'src/app/models/selectedTab';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss']
})

export class ArtComponent implements OnInit {

  secondData: SelectedTab = { id: 1, page: Page.Art, selected: Selected.Photos }

  constructor() { }

  ngOnInit(): void {
  }
}
