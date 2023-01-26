import {Component, Inject, OnInit} from '@angular/core';
import {STACK_ITEMS} from "../../core/constants/stek.constants";
import {StackItemInterface} from "../../core/interfaces/stack-Item.interface";

@Component({
  selector: 'stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss'],
  providers: [{provide: STACK_ITEMS, useValue: STACK_ITEMS}]
})
export class StacksComponent implements OnInit {

  constructor(@Inject(STACK_ITEMS) public items: StackItemInterface[]) { }

  ngOnInit(): void {
  }

}
