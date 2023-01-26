import {Component, Inject, OnInit} from '@angular/core';
import {LanguageService} from "../../core/services/language.service";
import {DropdownItemInterface} from "../../core/interfaces/dropdown-item.interface";
import {LANGUAGES} from "../../core/constants/language.constant";

@Component({
  selector: 'language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss']
})
export class LanguagePickerComponent implements OnInit {

  currentLang: DropdownItemInterface;

  constructor(
    public languageService: LanguageService,
    @Inject(LANGUAGES) public languages: DropdownItemInterface[]) {
    this.currentLang = this.languageService.getCurrentLang();
  }

  ngOnInit(): void {
  }

  changeLanguage(lang: string = 'en') {
    this.languageService.changeLanguage(lang)
    this.currentLang = this.languageService.getCurrentLang();
  }
}
