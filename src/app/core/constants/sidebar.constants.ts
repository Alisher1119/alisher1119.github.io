import {SidebarItemInterface} from "../interfaces/sidebar-item.interface";
import {marker as t} from "@biesbjerg/ngx-translate-extract-marker";

export const SIDEBAR_ITEMS: SidebarItemInterface[] = [
  {
    label: t('about me'),
    link: '#about',
    icon: 'user',
  },
  {
    label: t('projects'),
    link: '#projects',
    icon: 'command',
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
    label: t('education'),
    link: '#education',
    icon: 'file-text',
  },
  {
    label: t('certificates'),
    link: '#certificates',
    icon: 'award',
  },
  {
    label: t('contacts'),
    link: '#contacts',
    icon: 'link',
  },
];
