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
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/' + id,{headers : headers})
  }

  createBaby(baby : createBaby){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.post(this.url + '/create', baby,{headers : headers, responseType : 'type' as 'json'})
  }

  updateBaby(baby : baby){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.put(this.url +'/update', baby, {headers : headers, responseType : 'type' as 'json'})
  }
  
  deleteBaby(id : number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.delete(this.url +'/delete/' + id, {headers : headers, responseType : 'type' as 'json'})
  }
}
