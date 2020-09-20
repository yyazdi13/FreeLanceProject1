import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService} from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService],
  template: 
  `email: <input type="text" [(ngModel)]="email">`
})
export class ContactComponent implements OnInit {
  contacts: Object;
  contact: Contact [] = [];
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

  onSubmit({email, message}): void{
    this._ContactService.postMessage(email, message)
    .subscribe(contact=>{
      this.contact.push(contact);
    })
  }
  // {
  //   const newContact = {
  //     email: this.email,
  //     message: this.message
  //   }
  //   this._ContactService.postMessage(newContact)
  //   .subscribe(contact => {
  //     this.contact.push(contact)
  //   })
  // }

}
