import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[scroll]'
})
export class ScrollDirective {
  
  @HostListener('scroll',['$event']) endOfScroll(event: any): void {
    let tracker = event.target;
    let limit = tracker.scrollHeight - tracker.clientHeight;

    if(event.target.scrollTop === limit){
      window.alert('End of Scroll');
    }
  }

  constructor() {}

}
