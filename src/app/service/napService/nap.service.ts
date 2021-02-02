import { HttpClient, HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { createNap, nap } from 'src/app/entitiesModels/entitiesModels';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class NapService {

  url : string;

  constructor(
    private httpClient : HttpClient,
    private service : ServiceService
  ) 
  { 
    this.url = this.service.BASE_URL + '/nap'
  }

  getListNap(){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url, {headers})
  }

  getNap(id: number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/'+id, {headers : headers})
  }

  getNapByBaby(babyId: number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/baby/' + babyId, {headers : headers} )
  }

  createNap(nap : createNap){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.post(this.url + '/create', nap, {headers : headers, responseType: 'type' as 'json'})
  }

  updateNap(nap : nap){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.put(this.url + '/update', nap, {headers : headers, responseType: 'type' as 'json'})
  }

  deleteNap(id:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.delete(this.url + '/delete/' + id, {headers : headers, responseType: 'type' as 'json'})
  }
}
