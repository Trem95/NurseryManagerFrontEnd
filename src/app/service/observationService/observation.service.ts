import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { containerObs, createObservation, observation } from 'src/app/entitiesModels/entitiesModels';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  url: string;

  constructor(
    private httpClient: HttpClient,
    private service : ServiceService
  ) 
  { 
    this.url = this.service.BASE_URL + '/observation'
  }

  getListObservation(){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url, {headers})
  }

  getObservation(id:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/' + id, {headers : headers})
  }

  getObservationByBaby(babyId:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/baby/'+babyId,{headers:headers})
  }

  createObservation(observation: createObservation){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.post(this.url + '/create',observation, {headers : headers, responseType: 'type' as 'json'})
  }

  updateObservation(observation: observation){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.put(this.url +'/update',observation, {headers:headers, responseType: 'type' as 'json'} )
  }

  deleteObservation(id:number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.delete(this.url+'/delete'+id, {headers : headers, responseType :'type' as 'json'})
  }
}
