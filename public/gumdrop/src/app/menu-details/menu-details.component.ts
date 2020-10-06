import { Component, OnInit } from '@angular/core';
import { MenuDetailsService } from './menu-details.service';
import {Flavors} from './flavors';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css'],
  providers: [MenuDetailsService]
})
export class MenuDetailsComponent implements OnInit {
  flavors: object;
  name: string;
  image: string;
  description: string;
  link: string;
  ghLink: string;
  constructor(private MenuService: MenuDetailsService) { }

  ngOnInit(): void {
    this.MenuService.getFlavors()
    .subscribe
    (
      data => 
      {
        this.flavors = data;
        console.log(data);
      }
    )
  }

}
