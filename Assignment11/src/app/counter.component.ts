import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs:['counterChange','num'],
  template: `    
    <div id="outerComponent" class="clearfix">
        <div id="innerComponent">
          <button (click)="incrementCounter()">+</button>
            <span>{{counterValue}}</span>
          <button (click)="decrementCounter()">-</button>
        </div>
    </div>
  `,
  styles: [`div#outerComponent{
        border: 1px solid red;
        padding: 5px;
  }
  div#innerComponent{
    border: 1px solid green;
    float: right;
    padding: 5px;
  }
  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }
  `]
})
export class CounterComponent implements OnInit {
  @Input('counter') counterValue : number;
  counterChange:EventEmitter<number>;
  num:number;

  constructor() {
    this.counterChange = new EventEmitter();
  }

  incrementCounter(){
    this.counterValue+=1;
    this.counterChange.emit(this.counterValue);
    return false;

  }

  decrementCounter(){
    this.counterValue-=1;
    this.counterChange.emit(this.counterValue);
    return false;
  }

  ngOnInit() {
    this.counterChange.emit(this.counterValue);
    this.num = 10;
  }

}
