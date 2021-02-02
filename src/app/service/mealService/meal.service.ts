import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { createMeal, meal } from 'src/app/entitiesModels/entitiesModels';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  url : string;

  constructor(
    private httpClient : HttpClient,
    private service : ServiceService
  ) { 
    this.url = this.service.BASE_URL + '/meal'
  }

  getListMeal(){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url,{headers})
  }

  getMeal(id:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/' + id, {headers: headers})
  }

  getMealByBaby(babyId:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/baby/' + babyId, {headers : headers})
  }

  createMeal(meal: createMeal){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.post(this.url + '/create', meal, {headers : headers, responseType: 'type' as 'json'})
  }

  updateMeal(meal: meal){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.put(this.url + '/update', meal, {headers : headers, responseType : 'type' as 'json'})
  }

  deleteMeal(id:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.delete(this.url + '/delete/' + id,{headers : headers, responseType: 'type' as 'json'})
  }
}
