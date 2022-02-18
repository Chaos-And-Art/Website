import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/theming.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDarkMode?: boolean;
  isDarkModeInit?: boolean;

  defaultImage = "/assets/_misc/Silhouette_icon.png";
  image = "/assets/_misc/Silhouette_small.png";

  constructor(private themeService: ThemingService) {
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
  }

}
