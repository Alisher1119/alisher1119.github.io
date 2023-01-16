import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';
import {DEFAULT_LANG, LANG_KEY, LANGUAGES} from "../constants/language.constant";
import {DropdownItemsInterface} from "../interfaces/dropdown-Items.interface";

@Injectable()
export class LanguageService {

  public constructor(private translateService: TranslateService) {
    const currentLanguageCode = localStorage.getItem(LANG_KEY);
    if (currentLanguageCode) {
      this.translateService.use(currentLanguageCode);
      moment.locale(currentLanguageCode);
    } else {
      localStorage.setItem(LANG_KEY, DEFAULT_LANG);
      this.translateService.use(DEFAULT_LANG);
      moment.locale(DEFAULT_LANG);
    }
  }

  /**
   *
   * @param lang
   */
  changeLanguage(lang?: string) {
    if (!lang) {
      lang = DEFAULT_LANG;
    }
    localStorage.setItem(LANG_KEY, lang);
    this.translateService.use(lang);
    moment.locale(lang);
  }

  getCurrentLang() {
    const locale = localStorage.getItem(LANG_KEY);
    const currentLang = <DropdownItemsInterface>LANGUAGES.find((language: DropdownItemsInterface) => language.value === locale)
    if (currentLang.id) {
      return currentLang;
    }
    return LANGUAGES[0];
  }
}
