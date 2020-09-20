import { Component, OnInit } from '@angular/core';
import { ContactService} from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  contacts: Object;
  contact: Contact[];
  email: string;
  message: string;

  properties: Array<any>

  constructor(private _ContactService: ContactService) { }

  ngOnInit(): void {
    this._ContactService.getMessage()
    .subscribe
    (
      data =>
      {
        this.contacts = data;
        console.log(data);
      }
    )
  }

}
