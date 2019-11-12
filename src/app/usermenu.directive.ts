import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appUsermenu]',
  exportAs:'appUsermenu'
})
export class UsermenuDirective {
 
  constructor() { }
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('mouseenter') open() {
     this.isOpen = true;
  }
  @HostListener('mouseleave') close() {
    this.isOpen = false;
 }
  
}
