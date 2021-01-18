import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInServiceService {

  logging: number[] = [];

  add(log: any) {
    this.logging.push(log);
  }

  getItems(){
    return this.logging;
  }

  constructor() { }
}
