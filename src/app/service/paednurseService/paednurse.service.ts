import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createPaednurse, paednurse } from 'src/app/entitiesModels/entitiesModels';
import { ServiceService } from '../service.service';

@Injectable({
  providedIn: 'root'
})
export class PaednurseService {
  url : string;

  constructor(
    private httpClient : HttpClient,
    private service : ServiceService
  ) 
  {
    this.url = this.service.BASE_URL + '/paednurse'

  }

  getListPaednurse(){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url,{headers})
  }

  getPaednurse(id : number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.get(this.url + '/'+id,{headers : headers, responseType : 'type' as 'json'})
  }

  createPaednurse(paednurse : createPaednurse){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.post(this.url +'/create', paednurse, {headers : headers, responseType: 'type' as 'json'})
  }

  updatePaednurse( paednurse : paednurse){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.put(this.url + '/update', paednurse,{headers : headers, responseType: 'type' as 'json'})
  }

  deletePaednurse(id : number){
    let headers = new HttpHeaders().set('Authorization','Basic dXNlcjpyb290')
    return this.httpClient.delete(this.url + '/delete/' + id ,{​​ headers: headers, responseType: 'type' as 'json'}​​);}
}
