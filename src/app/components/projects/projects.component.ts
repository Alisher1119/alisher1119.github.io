import {Component, Inject, OnInit} from '@angular/core';
import {PROJECT_ITEMS} from "../../core/constants/project.constants";
import {ProjectItemInterface} from "../../core/interfaces/project-item.interface";

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [{provide: PROJECT_ITEMS, useValue: PROJECT_ITEMS}]
})
export class ProjectsComponent implements OnInit {

  constructor(@Inject(PROJECT_ITEMS) public items: ProjectItemInterface[]) { }

  ngOnInit(): void {
  }

}
