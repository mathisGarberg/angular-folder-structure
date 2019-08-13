import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme: Subject<boolean>;

  constructor() {
    this.isDarkTheme = new Subject<boolean>();
    this.isDarkTheme.next(false);
  }

  setDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme.next(isDarkTheme);
  }

  getDarkTheme(): Observable<boolean> {
    return this.isDarkTheme;
  }
}
