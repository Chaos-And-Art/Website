import { Component, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ThemingService } from 'src/app/theming.service';
import { PopupsComponent } from '../popups/popups.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  screenWidth: number = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  isDarkMode?: boolean;
  isDarkModeInit?: boolean;

  collapse: boolean = true;
  wasInside: boolean = false;

  constructor(public dialog: MatDialog, private themeService: ThemingService, private router: Router) {
    this.themeService.initTheme();
  }

  ngOnInit(): void {
    this.isDarkModeInit = (this.themeService.getColorTheme() == "dark-mode") ? true : false;
  }

  toggleDarkMode() {
    this.isDarkModeInit = (this.themeService.getColorTheme() == "dark-mode") ? true : false;
    this.isDarkModeInit = (this.themeService.getColorTheme() == "light-mode") ? true : false;

    this.isDarkMode = this.themeService.isDarkMode();
    this.isDarkMode ? this.themeService.update('light-mode') : this.themeService.update('dark-mode');

    let reloadPath = this.router.url;
    if (reloadPath == "/Home") {
      this.router.navigateByUrl('/blank', { skipLocationChange: true, }).then(() => {
        setTimeout(() => {
          this.router.navigate([reloadPath]);
        }, 0);

        // if (this.screenWidth <= 732) {
        //   setTimeout(() => {
        //     let navContent = document.getElementById('Nav_Menu') as HTMLInputElement;
        //     navContent.checked = true;
        //   }, 0);
        // }
      })
    } else {
      this.router.navigate([reloadPath]);
    }
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    let element = document.querySelector('.Top-Theme-Slider-Background') as HTMLElement;
    if (element.clientHeight == window.pageYOffset) {
      element.style.opacity = '1'
    } else if (element.clientHeight < window.pageYOffset && window.pageYOffset < 150) {
      element.style.opacity = (1 - window.pageYOffset / 250).toString();
    } else {
      element.style.opacity = '0'
    }
  }

  @HostListener('click')
  clickInside() {
    this.wasInside = true;
  }

  @HostListener('document:click')
  clickOut() {
    if (!this.wasInside) {
      let navContent = document.getElementById('Nav_Menu') as HTMLInputElement;
      navContent.checked = false;
    }
    this.wasInside = false;
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
