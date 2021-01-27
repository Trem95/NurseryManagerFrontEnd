import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baby, createBaby } from 'src/app/entitiesModels/entitiesModels';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class BabyService {
  url : string;

  constructor(
    private httpClient : HttpClient,
    private service : ServiceService
  ) 
  { 
    this.url = this.service.BASE_URL + '/baby'
  }

  getListBaby(){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url,{headers})
  }

  getBaby(id:number){
    return this.httpClient.get(this.url + '/' + id)
  }

  createBaby(baby : createBaby){
    return this.httpClient.post(this.url + '/create', baby, {responseType : 'type' as 'json'})
  }

  updateBaby(baby : baby){
    return this.httpClient.put(this.url +'/update', baby, {responseType: 'type' as 'json'})
  }
  
  deleteBaby(id : number){
    return this.httpClient.delete(this.url +'/delete' + id, {responseType : 'type' as 'json'})
  }
}
