import { Component, ElementRef, OnInit } from '@angular/core';
import { Page, Selected, SelectedTab } from 'src/app/models/selectedTab';

interface DOMRectI {
  bottom: number;
  height: number;
  left: number; // position start of element
  right: number; // position end of element
  top: number;
  width: number; // width of element
  x?: number;
  y?: number;
}

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
