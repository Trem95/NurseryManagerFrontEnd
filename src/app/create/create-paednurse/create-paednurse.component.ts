import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { createPaednurse } from 'src/app/entitiesModels/entitiesModels';
import { EncrDecrService } from 'src/app/service/encrDecrService/encr-decr.service';
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
    private router : Router,
    private encrDecrService : EncrDecrService
  ) { }

  ngOnInit() {
    console.log("test")
  }

  createPaednurse(value : NgForm){
    console.log(value)
    if (value.form.value.pwdInput === value.form.value.pwdConfirmInput) {
      this.paednurse = {
        name: value.form.value.nameInput,
        lastname : value.form.value.lastNameInput,
        login: value.form.value.nameInput[0].toLowerCase() + value.form.value.lastNameInput.toLowerCase(),
        pwd: this.encrDecrService.set('123456$#@$^@1ERF',value.form.value.pwdInput)      
      }      

      this.service.createPaednurse(this.paednurse).subscribe();

      this.router.navigate(['paednurse']);
      window.location.reload();
    }

    else{
      console.log("password not match")
    }

    

    
  }
}
