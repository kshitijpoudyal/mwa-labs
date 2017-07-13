import {Directive, EventEmitter, HostBinding, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
  @Output()color:EventEmitter<string>;
  private colors:string[] = ['green','red','black','blue','purple','darkblue','brown'];
  constructor() {
    this.color = new EventEmitter();
  }
  @HostBinding('style.color') textColor;
  @HostListener('click') changeColor(){
      this.textColor = this.colors[(Math.floor(Math.random()*this.colors.length))];
      this.color.emit(this.textColor);
  }
}
