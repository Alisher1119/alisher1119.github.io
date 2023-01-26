export interface ExperienceItemInterface {
  companyName: string;
  site?: string;
  from: string;
  to?: string | null;
  position: string;
  projects?: string[];
}
