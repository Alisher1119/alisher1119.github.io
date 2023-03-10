import {DropdownItemInterface} from "../interfaces/dropdown-item.interface";

export const LANG_KEY = 'lang';
export const DEFAULT_LANG = 'en';
export const LANGUAGES: DropdownItemInterface[] = [
  {
    id: '1',
    icon: 'en.png',
    value: 'en',
    label: 'English',
  },
  {
    id: '2',
    icon: 'uz.png',
    value: 'uz',
    label: 'O\'zbekcha',
  },
  {
    id: '3',
    icon: 'ru.png',
    value: 'ru',
    label: 'Русский',
  }
];
