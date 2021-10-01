import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPhoneNumberFormatter]'
})
export class PhoneNumberFormatterDirective {

  constructor(private ele: ElementRef) {
    
  }

@Input('appPhoneNumberFormatter') format : string = "";
  @HostListener('blur')
  onBlur() {
    let value : string = this.ele.nativeElement.value
    console.log(value)
    this.ele.nativeElement.value = `+91-(${String(value).substring(0,3)})-${String(value).substring(3,6)}-${String(value).substring(6,10)}`
    
  }
}
