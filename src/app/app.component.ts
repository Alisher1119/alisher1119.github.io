import {Component, Inject, Renderer2} from '@angular/core';
import {DARK, LIGHT} from "./core/constants/theme.constants";
import {APP_NAME} from "./core/constants/app.constants";
import {ThemeService} from "./core/services/theme.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = APP_NAME;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    public themeService: ThemeService) {
  }

  ngOnInit(): void {
    this.themeService.themeChanges().subscribe(theme => {
      if (this.themeService.oldTheme) {
        this.renderer.removeClass(document.body, this.themeService.oldTheme);
      }
      this.renderer.addClass(document.body, theme);
    })
  }
}
