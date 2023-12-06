import {ExperienceItemInterface} from "../interfaces/experience-item.interface";
import {marker as t} from "@biesbjerg/ngx-translate-extract-marker";
export const EXPERIENCE_ITEMS: ExperienceItemInterface[] = [
  {
    companyName: "Datagaze LLC",
    site: "https://datagaze.uz",
    from: '05-01-2023',
    position: t('Frontend Developer'),
    projects: ['https://dlp-test.datagaze-lab.uz'],
  },
  {
    companyName: "Freelancer",
    site: "",
    from: '07-01-2022',
    position: t('Frontend Developer'),
    projects: ['https://www.zarmedpratiksha.uz/', 'https://rolaypalace.uz', 'https://sector-siem-neon.vercel.app'],
  },
  {
    companyName: "CSEC UZ",
    site: "https://csec.uz/",
    from: '07-14-2021',
    position: t('Frontend Developer'),
    projects: ['https://cyberkent.uz'],
  },
  {
    companyName: "Updive LLC",
    site: "https://updive.uz",
    from: '12-01-2022',
    to: '05-01-2023',
    position: t('Frontend Developer'),
    projects: ['https://cyberkent.uz'],
  },
  {
    companyName: "Webline",
    site: "https://webline.uz",
    from: '11-01-2020',
    to: '07-09-2021',
    position: t('Backend Developer'),
    projects: ['"Tez E\'lon UZ" Telegram bot'],
  },
  {
    companyName: "Samarkand Renaissance",
    site: "https://samarkand-renaissance.uz/",
    from: '07-01-2020',
    to: '10-10-2020',
    position: t('Backend Developer'),
    projects: ['http://ikat-art.com', 'Twiguz.uz', 'https://coven.uz'],
  },
  {
    companyName: "Programming Club",
    from: '12-01-2019',
    to: '03-15-2020',
    position: t('Frontend Development Teacher'),
    projects: ['Eduhub'],
  }
];
