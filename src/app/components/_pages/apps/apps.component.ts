import { Component, OnInit } from '@angular/core';
import { Page, Selected, SelectedTab } from 'src/app/models/selectedTab';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  allData: SelectedTab = { id: 0, page: Page.Apps, selected: Selected.ShowAll }
  topData: SelectedTab = { id: 1, page: Page.Apps, selected: Selected.TopRated }
  appData: SelectedTab = { id: 2, page: Page.Apps, selected: Selected.Apps }
  gameData: SelectedTab = { id: 3, page: Page.Apps, selected: Selected.Games }

  constructor() { }

  ngOnInit(): void {
  }

}
