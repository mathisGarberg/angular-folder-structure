import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment as env } from '@env/environment';
import { Observable } from 'rxjs/Observable';
import { ThemeService } from '../../core/service/theme.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() changeTheme: EventEmitter<boolean> = new EventEmitter<boolean>();

  year = new Date().getFullYear();
  version = 2;
  envName = env.envName;
  isDarkTheme: Observable<boolean>;

    constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.changeTheme.emit(checked);
  }
}
