import { Component, OnInit } from '@angular/core';
import {ThemeService} from "../../core/services/theme.service";
import {DARK, LIGHT} from "../../core/constants/theme.constants";

@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent implements OnInit {

  constructor(private themeService: ThemeService) {

  }

  ngOnInit(): void {
  }

  changeTheme() {
    this.themeService.setTheme(this.themeService.currentTheme === DARK ? LIGHT: DARK)
  }
}
