import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
@Directive({
  selector: '[itemTimeStatus]'
})
export class TimeStatusDirective implements OnInit {
  @Input() itemTimeStatus: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) {

  }
  ngOnInit() {
    const currentDate = Date.now();
    const date = new Date(this.itemTimeStatus);
    const dateMillisec = date.getTime();
    const prevWeek = currentDate - 14 * 24 * 60*60*1000 ;

    if (dateMillisec < currentDate && dateMillisec > prevWeek) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border', '2px solid green');
    } else if (dateMillisec >= currentDate) {
      this.renderer.setStyle(this.elRef.nativeElement, 'border', '2px solid red');
    }
  }

}
