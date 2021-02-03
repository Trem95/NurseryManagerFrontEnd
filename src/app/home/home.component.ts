import { DatePipe, formatDate, Time} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { baby, createObservation, createTimesheet, timesheet } from '../entitiesModels/entitiesModels';
import { BabyService } from '../service/babyService/baby.service';
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
  timesheetToAdd : createTimesheet
  observationToAdd : createObservation
  currentDate = new Date()
  dateToAdd : any
  timeToAdd : any
  constructor(
    private babyService : BabyService,
    private timesheetService : TimesheetService,
    private observationService : ObservationService,
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
    this.dateToAdd = formatDate(this.currentDate,'yyyy-MM-dd','en')
    this.timeToAdd = formatDate(this.currentDate,'HH:mm:ss','en')
    
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
    //  window.location.reload()
    
   }

}
