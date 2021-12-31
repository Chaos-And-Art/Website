import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupsComponent } from '../popups/popups.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  collapse: boolean = true;
  wasInside: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
    // console.log("INSIDE")
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.wasInside) {
      let navContent = document.getElementById('Nav_Menu') as HTMLInputElement;
      navContent.checked = false;
    }
    this.wasInside = false;
    // console.log("OUTSIDE")
  }

  openMusicDialog() {
    this.dialog.open(PopupsComponent, {
      data: {
        type: 'music',
      },
      position: {
        top: '200px',
      },
    });
  }
}
