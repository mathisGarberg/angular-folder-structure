import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '@app/service/theme.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
  public theme = 'my-light-theme';

  overlayContainer: OverlayContainer;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    if (this.overlayContainer) {
      this.overlayContainer.getContainerElement().classList.add(this.theme);
    }

    this.themeService
      .getDarkTheme()
      .pipe(
        tap((isDarkTheme: boolean) => {
          this.theme = isDarkTheme ? 'my-dark-theme' : 'my-light-theme';

          if (this.overlayContainer) {
            const overlayContainerClasses = this.overlayContainer.getContainerElement()
              .classList;
            const themeClassesToRemove = Array.from(
              overlayContainerClasses
            ).filter((item: string) => item.includes('-theme'));
            if (themeClassesToRemove.length) {
              overlayContainerClasses.remove(...themeClassesToRemove);
            }
            overlayContainerClasses.add(this.theme);
          }
        })
      )
      .subscribe();
  }
}
