import { Component, OnInit, ViewEncapsulation, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @ContentChild('content', {static: true})
  contentTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
