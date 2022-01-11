import { Component, OnInit } from '@angular/core';
import { Page, Selected, SelectedTab } from 'src/app/models/selectedTab';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  thirdData: SelectedTab = { id: 1, page: Page.Apps, selected: Selected.Apps }

  constructor() { }

  ngOnInit(): void {
  }

}
