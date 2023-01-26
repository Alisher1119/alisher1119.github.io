import {Component, Inject, OnInit} from '@angular/core';
import {CONTACTS} from "../../core/constants/contact.constants";
import {ContactInterface} from "../../core/interfaces/contact.interface";

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  providers: [{provide: CONTACTS, useValue: CONTACTS}]
})
export class ContactsComponent implements OnInit {

  constructor(@Inject(CONTACTS) public items: ContactInterface[]) { }

  ngOnInit(): void {
  }

}
