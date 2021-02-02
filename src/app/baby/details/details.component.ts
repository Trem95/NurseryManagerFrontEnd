import { Component, OnInit } from '@angular/core';
import { baby, observation, containerObs, meal, timesheet, nap } from 'src/app/entitiesModels/entitiesModels';
import { BabyService } from 'src/app/service/babyService/baby.service';
import { MealService } from 'src/app/service/mealService/meal.service';
import { NapService } from 'src/app/service/napService/nap.service';
import { ObservationService } from 'src/app/service/observationService/observation.service';
import { TimesheetService } from 'src/app/service/timesheetService/timesheet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  baby : any
  listVase : any
  listObservation: Array<observation> = new Array<observation>()
  listMeal: Array<meal> = new Array<meal>()
  listNap : Array<nap> = new Array<nap>()
  listTimesheet: Array<timesheet> = new Array<timesheet>()

  id : number = JSON.parse(localStorage.getItem("babyId"));
  babyName : string = JSON.parse(localStorage.getItem("babyName"))

  constructor(
    private observationService : ObservationService,
    private timesheetService: TimesheetService,
    private mealService: MealService,
    private napService : NapService,
    private babyService : BabyService
  ) { }

  ngOnInit(): void {
    this.observationService.getObservationByBaby(this.id).toPromise()
    .then((data:any) =>{
      if (typeof(data.list) === 'undefined') {
        this.listObservation.push(data)
        console.log("Observation => ",data)
      }
      else
      {
        this.listObservation = data.list
        console.log("Observation => ",data.list)
      }
      }
    )
    .catch(err=>{
      console.log('error obs GetAllByBaby => ',err)
    })

    this.mealService.getMealByBaby(this.id).toPromise()
      .then((data:any) => {
        if (typeof(data.list) === 'undefined') {
          this.listMeal.push(data)
          console.log("Meal => ",data)
        }
        else
        {
          this.listMeal = data.list
          console.log("Meal => ",data.list)
        }})
      .catch(err => {
        console.log('error meal GetAllByBaby => ',err) 
        this.listMeal = null;
      })
    this.napService.getNapByBaby(this.id).toPromise()
      .then((data:any)=>{
        if (typeof(data.list) === 'undefined') {
          this.listNap.push(data)
          console.log("Nap => ",data)
        }
        else
        {
          this.listNap = data.list
          console.log("Nap => ",data.list)
        }
      })
      .catch(err=>{
        console.log('error nap GetAllByBaby')
        this.listNap = null
      })
    this.timesheetService.getTimesheetByBaby(this.id).toPromise()
      .then((data:any)=>{       
        if (typeof(data.list) === 'undefined') {
          this.listTimesheet.push(data)
          console.log("Timesheet => ",data)
        }
        else
        {
          this.listTimesheet = data.list
          console.log("Timesheet => ",data.list)
        }
        
      })
      .catch(err=>{
        console.log('error timesheet GetAllByBaby => ',err)
        this.listTimesheet = null
      })
  }
  }


