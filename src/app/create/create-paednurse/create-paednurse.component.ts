import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { createPaednurse } from 'src/app/entitiesModels/entitiesModels';
import { PaednurseService } from 'src/app/service/paednurseService/paednurse.service';
@Component({
  selector: 'app-create-paednurse',
  templateUrl: './create-paednurse.component.html',
  styleUrls: ['./create-paednurse.component.scss']
})
export class CreatePaednurseComponent implements OnInit {

  paednurse : createPaednurse;
  constructor(
    private service : PaednurseService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  createPaednurse(value : NgForm){
    this.paednurse = {
      name: value.form.value.name,
      login: value.form.value.login,
      pwd: value.form.value.pwd      
    }

    this.service.createPaednurse(this.paednurse);

    this.router.navigate(['paednurse']);
  }
}
