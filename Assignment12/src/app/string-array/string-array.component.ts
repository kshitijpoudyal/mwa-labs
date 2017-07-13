import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-string-array',
  template: `
    <ul>
      <li *ngFor="let str of stringArray" upper mycolor (color)="changedColor($event)">
        {{str}}
      </li>
    </ul>
    <p>color is {{thisColor}}</p>
    <p [myvisibility]="true">hello</p>
    <p [myvisibility]="false">hello1</p>
  `,
  styleUrls: ['./string-array.component.css']
})
export class StringArrayComponent implements OnInit {
  @Input()stringArray:string[];
  thisColor:string;

  constructor() { }

  ngOnInit() {
  }

  changedColor(value){
      this.thisColor = value;
  }

}
