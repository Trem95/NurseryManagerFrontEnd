import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  listNavItem: Array<navItem> = 
  [
    {
      name: 'Puéricultrice',
      link: 'paednurse'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

export interface navItem{
  name: string;
  link: string;
}