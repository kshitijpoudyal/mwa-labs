import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  outputs:['counterChange'],
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
  @Input('ComponentCounterValue') counterValue : number;
  counterChange:EventEmitter<number>;

  constructor() {
    this.counterChange = new EventEmitter();
  }

  incrementCounter(){
    this.counterValue+=1;
    this.counterChange.emit(this.counterValue);

  }

  decrementCounter(){
    this.counterValue-=1;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
    this.counterChange.emit(this.counterValue);
  }

}
