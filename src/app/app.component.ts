import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { LogInServiceService } from '../../src/app/log-in-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})
export class AppComponent {

  today: number = Date.now();
  show:boolean = false;
  buttonName:any = 'Show';
  dates: number[] = [];
  clicks:number = 0;

  constructor(public logInService: LogInServiceService) {
  }

  
  ngOnInit () {  
    this.dates = this.logInService.getItems();
  }

  toggle() {

    this.show = !this.show;
    if(this.show)  
      {
        this.buttonName = "Hide";
        this.clicks +=1;
        this.logInService.add(Date.now());
      }
    else
      {      
        this.buttonName = "Show";
        this.logInService.add(Date.now());

      }
  }
}
