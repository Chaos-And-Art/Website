import { Component, OnInit } from '@angular/core';
import { ThemingService } from 'src/app/theming.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isDarkMode?: boolean;

  constructor(private themeService: ThemingService) {
    this.themeService.initTheme();
  }

  ngOnInit(): void {
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    this.isDarkMode
      ? this.themeService.update('light-mode')
      : this.themeService.update('dark-mode');
  }

}
