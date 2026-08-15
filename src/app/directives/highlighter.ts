import { Directive, effect, ElementRef, input, InputSignal } from '@angular/core';


@Directive({
  selector: '[appHighlighter]',
})
export class Highlighter {

  humidity: InputSignal<number> = input<number>(0);

  constructor(private el: ElementRef) {
    effect(() => {
      const humidityValue = this.humidity();
      if (humidityValue > 80) {
        this.el.nativeElement.style.backgroundColor = '#FF6347'; // Light red
        this.el.nativeElement.style.border = '2px solid red';
      }else if (humidityValue < 70 && humidityValue > 40) {
        this.el.nativeElement.style.backgroundColor = '#90EE90'; // Light green
        this.el.nativeElement.style.border = '2px solid green';
      }
      else if (humidityValue < 40) {
        this.el.nativeElement.style.backgroundColor = '#ADD8E6'; // Light blue
        this.el.nativeElement.style.border = '2px solid blue';
      }
      else {
        this.el.nativeElement.style.backgroundColor = '';
        this.el.nativeElement.style.border = '';
      }
    });
  }

}
