import {Component, Inject, OnInit} from '@angular/core';
import {EDUCATION_ITEMS} from "../../core/constants/education.constants";
import {EducationItemInterface} from "../../core/interfaces/education-item.interface";

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  providers: [{provide: EDUCATION_ITEMS, useValue: EDUCATION_ITEMS}]
})
export class EducationComponent implements OnInit {

  constructor(@Inject(EDUCATION_ITEMS) public items: EducationItemInterface[]) {
  }

  ngOnInit(): void {
  }

}
