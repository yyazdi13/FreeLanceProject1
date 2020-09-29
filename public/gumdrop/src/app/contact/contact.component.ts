import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ContactService} from './contact.service';
import { Contact } from './contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService],
})
export class ContactComponent implements OnInit {
  contacts: Object;
  contact: Contact [] = [];
  email: string;
  message: string;
  hidden: boolean;

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
    this.hidden = false;
  }

  onSubmit({email, message}): void{
    this._ContactService.postMessage(email, message)
    .subscribe(contact=>{
      this.contact.push(contact);
    })
    this.hidden = true;
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
