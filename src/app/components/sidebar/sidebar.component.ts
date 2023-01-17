import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {SIDEBAR_ITEMS} from "../../core/constants/sidebar.constants";
import {SidebarItemsInterface} from "../../core/interfaces/sidebar-Items.interface";

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() open: boolean = false;

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(@Inject(SIDEBAR_ITEMS) public items: SidebarItemsInterface[]) {
  }

  ngOnInit(): void {
  }

  onClose() {
    this.close.emit();
  }
}
