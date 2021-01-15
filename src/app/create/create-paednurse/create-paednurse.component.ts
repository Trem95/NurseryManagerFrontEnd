import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/core";
import { createPaednurse } from 'src/app/entitiesModels/entitiesModels';
@Component({
  selector: 'app-create-paednurse',
  templateUrl: './create-paednurse.component.html',
  styleUrls: ['./create-paednurse.component.scss']
})
export class CreatePaednurseComponent implements OnInit {

  paednurse : createPaednurse;
  constructor() { }

  ngOnInit() {
  }

}
