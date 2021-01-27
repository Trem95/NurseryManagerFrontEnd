import { Component, OnInit } from '@angular/core';
import { paednurse } from '../entitiesModels/entitiesModels';
import { PaednurseService } from '../service/paednurseService/paednurse.service';

@Component({
  selector: 'app-paednurse',
  templateUrl: './paednurse.component.html',
  styleUrls: ['./paednurse.component.scss']
})
export class PaednurseComponent implements OnInit {

  listPaednurse: any;
  constructor(
    private service : PaednurseService
  ) { }

  ngOnInit(): void { 
    this.service.getListPaednurse().toPromise()
    .then(data => {
      console.log(data)
      this.listPaednurse = data
    })
    .catch(err => {
      console.log('error paednurse component => ', err)
    })
  }

  deletePaednurse(id:number) {
    this.service.deletePaednurse(id).toPromise()
    .then(data => {
      console.log('data delete Paednurse Component => ', data)
    })
    .catch(err => {
      console.log('error delete Paednurse Component => ',err)
    })
    window.location.reload();
  }

  updatePaednurse(paednurse : paednurse){
    this.service.updatePaednurse(paednurse).toPromise()
    .then(data =>{
      console.log('data update Paednurse Component => ', data)
    })
    .catch(err => {
      console.log('error update Paednurse Component => ', err)
    })
  }

 


}
