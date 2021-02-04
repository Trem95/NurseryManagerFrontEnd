import { DatePipe, formatDate, Time} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { parse } from 'path';
import { baby, createMeal, createNap, createObservation, createTimesheet, nap, timesheet } from '../entitiesModels/entitiesModels';
import { BabyService } from '../service/babyService/baby.service';
import { MealService } from '../service/mealService/meal.service';
import { NapService } from '../service/napService/nap.service';
import { ObservationService } from '../service/observationService/observation.service';
import { TimesheetService } from '../service/timesheetService/timesheet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})
export class HomeComponent implements OnInit {

  listBabyToArrive : Array<baby> = new Array<baby>()
  listBabyArrived :  Array<baby> = new Array<baby>()
  listBabyLeaved : Array<baby> = new Array<baby>()

  timesheetToCompare : timesheet
  timesheetToUpdate : timesheet
  timesheetToAdd : createTimesheet
  observationToAdd : createObservation
  mealToAdd : createMeal
  napToAdd : createNap
  napToCompare : nap

  currentDate = new Date()
  dateToAdd : any
  timeToAdd : any
  babyChosen : any

  boolObs : boolean = false
  boolMeal : boolean = false
  boolNap : boolean = false

  constructor(
    private babyService : BabyService,
    private timesheetService : TimesheetService,
    private observationService : ObservationService,
    private mealService : MealService,
    private napService: NapService,
    private datePipe : DatePipe
    
  ) { 
  }

  ngOnInit(): void {
    this.babyService.getListBaby().subscribe(
      (data:any) =>{
        console.log("Current Date => ",this.currentDate)
        data.list.forEach((baby:baby) => {
          this.timesheetService.getTimesheetByBaby(baby.id).toPromise()
          .then((timeshList:any) =>{
            this.timesheetToCompare = timeshList.list[timeshList.list.length-1]
            if (this.timesheetToCompare !== undefined) {
              // console.log("TMS to Compare => ",this.timesheetToCompare.timesheetDate)
              // console.log("CURRENT DATE => ",formatDate(this.currentDate,'yyyy-MM-dd','en'))
              console.log("TEST => ",this.timesheetToCompare.arrivalTime)
              if (this.datePipe.transform(this.timesheetToCompare.timesheetDate) !== this.datePipe.transform(this.currentDate)){
                this.listBabyToArrive.push(baby)
              }
              else if(this.datePipe.transform(this.timesheetToCompare.timesheetDate) === this.datePipe.transform(this.currentDate)
                      && this.datePipe.transform(this.timesheetToCompare.leaveTime) !== null){
                this.listBabyLeaved.push(baby)          
              }
              else{
                this.listBabyArrived.push(baby)
              }
            }
            else{
              this.listBabyToArrive.push(baby)
            }
          })
          .catch(err =>{
            console.log('Error Timesheet => ',err)
          })
      });

    })
    console.log(this.listBabyToArrive)
    console.log(this.listBabyArrived)
  }

  addBabyArrive(formulaire:NgForm, babyToAdd:baby){

    this.getCurrentDate()
    console.log(this.dateToAdd)
    console.log(this.timeToAdd)
    this.timesheetToAdd = {
      timesheetDate : this.dateToAdd,
      arrivalTime : this.timeToAdd,
      leaveTime : null,
      baby : babyToAdd
    }
    console.log(this.timesheetToAdd)
    this.timesheetService.createTimesheet(this.timesheetToAdd).subscribe()
    if ( formulaire.form.value.obsAuthor !== '' && formulaire.form.value.obsInfo !== '' ) {
      this.observationToAdd = {
        obsAuthor: formulaire.form.value.obsAuthor,
        observation: formulaire.form.value.obsInfo,
        observationDate: this.dateToAdd,
        observationTime : this.timeToAdd,
        baby: babyToAdd 
      }
      console.log(this.observationToAdd)
       this.observationService.createObservation(this.observationToAdd).subscribe() 
    }
    window.location.reload()
    
   }

   verifShow(babyId:number):boolean{
    let dataId = document.querySelector(".baby_"+babyId.toString()).className
    dataId = dataId[dataId.length-1] 
    this.babyChosen = dataId
    console.log("dataId => ",dataId)
    if (this.babyChosen === babyId.toString()) {
      return true
    }
    return false
   }

   showObs(babyId:number){
     this.boolMeal = false
     this.boolNap = false
     if (this.verifShow(babyId)) {
       this.boolObs = !this.boolObs
     }
     
   }

   showMeal(babyId: number){
     this.boolObs = false
     this.boolNap = false
    if (this.verifShow(babyId)) {
      this.boolMeal = !this.boolMeal
    }
  }

  showNap(babyId: number){
    this.boolObs = false
    this.boolMeal = false
    if (this.verifShow(babyId)) {
      this.boolNap = !this.boolNap
    }
  }

   addObs(formulaire: NgForm, babyToAdd:baby){
    this.getCurrentDate()
    if ( formulaire.form.value.obsAuthor !== '' && formulaire.form.value.obsInfo !== '' ) {
      this.observationToAdd = {
        obsAuthor: formulaire.form.value.obsAuthor,
        observation: formulaire.form.value.obsInfo,
        observationDate: this.dateToAdd,
        observationTime : this.timeToAdd,
        baby: babyToAdd 
      }
      console.log(this.observationToAdd)
       this.observationService.createObservation(this.observationToAdd).subscribe() 
    }
    this.boolObs = false
   }

   addMeal(formulaire: NgForm, babyToAdd: baby){
     this.getCurrentDate()
    this.mealToAdd = {
      typeMeal : formulaire.form.value.typeMeal,
      mealObs : formulaire.form.value.obsMeal,
      mealDate : this.dateToAdd,
      mealTime : this.timeToAdd,
      baby : babyToAdd
    }
    console.log(this.mealToAdd)
    this.mealService.createMeal(this.mealToAdd).subscribe()
    this.boolMeal = false;
    
   }

   addNap(formulaire: NgForm, babyToAdd: baby){
     
   }

   getCurrentDate(){
    this.currentDate = new Date()
    let dateToday = new Date(this.currentDate.getUTCFullYear(),this.currentDate.getUTCMonth(),
                    this.currentDate.getUTCDate()+1,this.currentDate.getUTCHours(),this.currentDate.getUTCMinutes(), this.currentDate.getSeconds())
    this.dateToAdd = formatDate(dateToday,'yyyy-MM-dd','en')
    this.timeToAdd = formatDate(dateToday,'HH:mm:ss','en')
   }

   napVerif(baby:baby):boolean{
     //false = Debut sieste
     //true = Fin sieste
    let verif:boolean 
    this.napService.getNapByBaby(baby.id).subscribe
    ((napList:any) =>{
      this.napToCompare = napList.list[napList.list.length-1]
      if (this.napToCompare !== undefined) {
        if (this.datePipe.transform(this.napToCompare.napDate) !== this.datePipe.transform(this.currentDate) ) {
          verif = false;
        }
        else if(this.napToCompare.napTimeEnd === null && this.napToCompare.napTimeBegin !== null  ){
          verif = true;
        }
        else{
          verif = false;
        }
      }
      else{
        verif = false;
      }

      return verif
    })
    return null
   }

   endTimesheet(baby:baby){
     this.getCurrentDate()
     this.timesheetService.getTimesheetByBaby(baby.id).subscribe(
       (timeshlist:any) =>{
         this.timesheetToUpdate = timeshlist.list[timeshlist.list.length-1]
         this.timesheetToUpdate = {
           timesheetDate : this.dateToAdd,
           arrivalTime : this.timesheetToUpdate.arrivalTime,
           leaveTime: this.timeToAdd,
           id : this.timesheetToUpdate.id,
           baby : baby 
         }

         this.timesheetService.updateTimesheet(this.timesheetToUpdate).subscribe()
         this.listBabyLeaved.push(baby)
         window.location.reload
       })
   }
}
