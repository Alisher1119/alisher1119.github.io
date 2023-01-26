import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import * as moment from 'moment';
import {DEFAULT_LANG, LANG_KEY, LANGUAGES} from "../constants/language.constant";
import {DropdownItemInterface} from "../interfaces/dropdown-item.interface";

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

    this.getCurrentLang();
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

  getCurrentLang(): DropdownItemInterface {
    const locale = this.translateService.currentLang;
    const currentLang = <DropdownItemInterface>LANGUAGES.find((language: DropdownItemInterface) => language.value === locale)
    if (currentLang.id) {
      return currentLang;
    }
    return LANGUAGES[0];
  }
}
