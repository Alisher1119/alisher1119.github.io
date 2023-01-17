import {Component, Inject, OnInit} from '@angular/core';
import {APP_NAME} from "../../core/constants/app.constants";
import {SidebarService} from "../../core/services/sidebar.service";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sidebarOpen: boolean = false;

  constructor(@Inject(APP_NAME) public appName: string, public sidebarService: SidebarService) {
  }

  ngOnInit(): void {
  }

  click() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log(this.sidebarOpen);
  }

}
