import {SidebarItemsInterface} from "../interfaces/sidebar-Items.interface";
import {marker as t} from "@biesbjerg/ngx-translate-extract-marker";

export const SIDEBAR_ITEMS: SidebarItemsInterface[] = [
  {
    label: t('about me'),
    link: '#about',
    icon: 'user',
  },
  {
    label: t('technology stack'),
    link: '#stack',
    icon: 'layers',
  },
  {
    label: t('working experience'),
    link: '#experience',
    icon: 'briefcase',
  },
  {
    label: t('projects'),
    link: '#projects',
    icon: 'command',
  },
  {
    label: t('contacts'),
    link: '#contacts',
    icon: 'link',
  },
];
