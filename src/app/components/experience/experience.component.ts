import {Component, Inject, OnInit} from '@angular/core';
import {EXPERIENCE_ITEMS} from "../../core/constants/experience.constants";
import {ExperienceItemInterface} from "../../core/interfaces/experience-item.interface";

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  providers: [{provide: EXPERIENCE_ITEMS, useValue: EXPERIENCE_ITEMS}]
})
export class ExperienceComponent implements OnInit {

  constructor(@Inject(EXPERIENCE_ITEMS) public items: ExperienceItemInterface[]) { }

  ngOnInit(): void {
  }

}
