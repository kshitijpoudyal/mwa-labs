import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective implements OnInit{
  ngOnInit(): void {
    if(!this.myvisibility){
      this.renderer.setElementStyle(this.element.nativeElement,'display','none');
    }
  }

  @Input() myvisibility:boolean;
  constructor(private element: ElementRef, private renderer: Renderer) {

  }
}
