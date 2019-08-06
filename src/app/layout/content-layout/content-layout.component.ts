import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../../core/service/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  private overlayContainer: OverlayContainer;
  theme = 'my-light-theme';
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    if (this.overlayContainer) {
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    }
  }

  onThemeChange(theme: boolean) {
    this.themeService.setDarkTheme(theme);
    this.theme = (theme) ? 'my-dark-theme' : 'my-light-theme';
    console.log(theme);
    if (this.overlayContainer) {
      const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
      const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-theme'));
      if (themeClassesToRemove.length) {
        overlayContainerClasses.remove(...themeClassesToRemove);
      }
      overlayContainerClasses.add(this.theme);
    }
  }

}
