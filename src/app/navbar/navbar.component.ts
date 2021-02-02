import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public paednurse = JSON.parse(localStorage.getItem("paednurse"))
  listNavItem: Array<navItem> = 
  [
    {
      name: 'Puéricultrice',
      link: 'paednurse'
    },
    {
      name : 'Se connecter',
      link : 'login'
    },
    {
      name: 'Enfants',
      link: 'baby'
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