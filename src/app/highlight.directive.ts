import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('orange');
      this.color('white');
      this.bold('bold');
      this.border('solid',1,'black');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('white');
      this.color('black');
      this.bold('normal');
      this.border('solid',1,'white');
    }
  
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }

    private color(color: string){
      this.el.nativeElement.style.color = color;
    }

    private bold(type: string){
        this.el.nativeElement.style.fontWeight = type;
    }

    private border(type: string, size:number, color: string){
      this.el.nativeElement.style.border = type;
      this.el.nativeElement.style.borderSize = size;
      this.el.nativeElement.style.borderColor = color;
    }

    // And So On 
}

