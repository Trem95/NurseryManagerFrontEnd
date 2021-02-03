import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createTimesheet, timesheet } from 'src/app/entitiesModels/entitiesModels';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  url: string;

  constructor(
    private httpClient : HttpClient,
    private service : ServiceService
  ) 
  { 
    this.url = this.service.BASE_URL +'/timesheet'
  }

  getListTimesheet(){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url, {headers})
  }

  getTimesheet(id:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/' +id,{headers:headers})
  }

  getTimesheetByBaby(babyId:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url+'/baby/'+babyId, {headers:headers})
  }

  createTimesheet(timesheet:createTimesheet){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.post(this.url+'/create',timesheet, {headers:headers, responseType: 'type' as 'json'})
  }

  updateTimesheet(timesheet:timesheet){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.put(this.url+ '/update',timesheet, {headers:headers, responseType: 'type' as 'json'})
  }

  deleteTimesheet(id:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.delete(this.url+ '/delete/'+id, {headers:headers, responseType: 'type' as 'json'})
  }
}
