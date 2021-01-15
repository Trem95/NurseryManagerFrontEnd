import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  BASE_URL: string = 'http://localhost:8081'

  constructor() { }

}
