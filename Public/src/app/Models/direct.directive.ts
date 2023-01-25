import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[direction]',
})
export class DirectDirective {
  constructor(private eleref: ElementRef) {
    eleref.nativeElement.style.border = '7px solid red';
  }

  @HostListener('mouseover') OnMouseOver() {
    this.eleref.nativeElement.style.border = '8px solid green';
  }
  @HostListener('mouseout') OnMouseOut() {
    this.eleref.nativeElement.style.border = '4px solid yellow';
  }
}
