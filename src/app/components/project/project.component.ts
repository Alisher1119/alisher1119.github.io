import {Component, Input, OnInit} from '@angular/core';
import {ProjectItemsInterface} from "../../core/interfaces/project-Items.interface";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() item: ProjectItemsInterface | null;
  constructor() {
   this.item = null
  }

  ngOnInit(): void {
    console.log(this.item)
  }

}
