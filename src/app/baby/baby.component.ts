import { Component, OnInit } from '@angular/core';
import { baby } from '../entitiesModels/entitiesModels';
import { BabyService } from '../service/babyService/baby.service';

@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {
  listVase : any
  listBaby: Array<any>;
  constructor(
    private service : BabyService
  ) { }

  ngOnInit(): void {
    this.service.getListBaby().toPromise()
    .then(data => {
      
      this.listVase = data
      this.listBaby = this.listVase.list
    
    })
    .catch(err => {
      console.log('error baby component => ',err)
    })
  }

  
  deleteBaby(id:number){
   this.service.deleteBaby(id).toPromise()
   .then(data => {
     console.log('data delete Baby Component => ',data)
   })
   .catch(err=> {
     console.log('error delete Baby Component => ', err)
   })
   window.location.reload();

  }

  updateBaby(baby : baby){
    this.service.updateBaby(baby).toPromise()
    .then(data => {
      console.log('data update Baby Component => ',data)
    })
    .catch(err =>{
      console.log('error update Baby Component => ',err)
    })
  }

  getDetails(babyId:number, babyName: string){
     localStorage.setItem("babyId",JSON.stringify(babyId))
     localStorage.setItem("babyName",JSON.stringify(babyName)) 
  }

}

