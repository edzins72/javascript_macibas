import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCiparaDetektors]',
})
export class CiparaDetektorsDirective {
  constructor(private elementNoHtmlKurIelikamSelektoru: ElementRef) {
    //pirms zimesanas
  }
  ngOnInit(): void {
    //pec zimesanas
    this.krasot(this.elementNoHtmlKurIelikamSelektoru);
  }

  irCipars = (str: string) => {
    let cipars = Number(str);
    return !isNaN(cipars);
  };
  krasot = (t: ElementRef) => {
    if (this.irCipars(t.nativeElement.innerHTML))
      t.nativeElement.style.background = 'red';
  };
}
