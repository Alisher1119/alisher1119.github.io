import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {THEME_KEY} from "../constants/theme.constants";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeSelection: BehaviorSubject<string> = new BehaviorSubject<string>('');
  oldTheme: string | null;
  currentTheme: string | null;

  constructor() {
    this.oldTheme = null;
    this.currentTheme = localStorage.getItem(THEME_KEY);
    this.setTheme(this.currentTheme || 'light');
  }

  setTheme(theme: string) {
    localStorage.setItem(THEME_KEY, theme);

    this.oldTheme = this.themeSelection.value;
    this.currentTheme = theme;
    this.themeSelection.next(theme);
  }

  themeChanges(): Observable<string> {
    return this.themeSelection.asObservable();
  }
}
