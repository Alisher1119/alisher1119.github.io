import {Component, Inject, OnInit} from '@angular/core';
import {BIRTH_DATE, EXP_BEGAN_AT} from "../../core/constants/about.constants";

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [
    {provide: EXP_BEGAN_AT, useValue: EXP_BEGAN_AT},
    {provide: BIRTH_DATE, useValue: BIRTH_DATE},
  ]
})
export class AboutComponent implements OnInit {
  constructor(
    @Inject(BIRTH_DATE) public birtDate: string,
    @Inject(EXP_BEGAN_AT) public expBeganAt: string
  ) {
  }

  ngOnInit(): void {
  }

}
