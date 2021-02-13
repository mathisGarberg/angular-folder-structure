import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkTheme: BehaviorSubject<boolean>;

  constructor() {
    this.isDarkTheme = new BehaviorSubject<boolean>(
      localStorage.getItem('isDarkTheme') === 'true'
    );
  }

  setDarkTheme(isDarkTheme: boolean) {
    this.isDarkTheme.next(isDarkTheme);
    localStorage.setItem('isDarkTheme', this.isDarkTheme.value.toString());
  }

  getDarkTheme(): Observable<boolean> {
    return this.isDarkTheme;
  }
}
