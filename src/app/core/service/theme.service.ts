import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this.darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    this.darkTheme.next(isDarkTheme);
  }
}
