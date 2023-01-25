import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ModDirect]',
})
export class DirectDirective {
  constructor(private eleref: ElementRef) {
    eleref.nativeElement.style.border = '1px solid #ddd';
  }

  @HostListener('mouseover') OnMouseOver() {
    this.eleref.nativeElement.style.border = '5px solid black';
  }
  @HostListener('mouseout') OnMouseOut() {
    this.eleref.nativeElement.style.border = '2px solid #ddd';
  }
}
