import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { EncrDecrService } from 'src/app/service/encrDecrService/encr-decr.service';
import { PaednurseService } from 'src/app/service/paednurseService/paednurse.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private EncrDecr: EncrDecrService,
    private paednurseService : PaednurseService) { }

  ngOnInit(): void {

  }

  confirmLogin(formulaire: NgForm) {
    let form = formulaire.form.value
    this.paednurseService.getListPaednurse().subscribe(data =>{
      let listPaednurse :any = data
      listPaednurse.list.map(element =>{
        let pwdNotHash = this.EncrDecr.get('123456$#@$^@1ERF',element.pwd)
        if(pwdNotHash === form.pwdInput && element.login === form.loginInput){
          console.log("password OK")
          localStorage.setItem("paednurse",JSON.stringify(element.name))
        }
      })
    })

  }

}
