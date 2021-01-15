import { HttpClient } from '@angular/common/http';
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
    return this.httpClient.get(this.url)
  }

  getPaednurse(id : number){
    return this.httpClient.get(this.url + '/'+id)
  }

  createPaednurse(paednurse : createPaednurse){
    return this.httpClient.post(this.url +'/create', paednurse, {responseType : 'type' as 'json'})
  }

  updatePaednurse( paednurse : paednurse){
    return this.httpClient.put(this.url + '/update', paednurse, { responseType : 'type' as 'json'})
  }

  deletePaednurse(id : number){
    return this.httpClient.delete(this.url + '/delete/' + id, {responseType: 'type' as 'json'})
  }
}
