import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  num:number;
  value:number;
  counterChange(value){
    this.value=value;
  }
  fun(val){
    console.log(val);
  }
}
