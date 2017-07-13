import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DbService } from '../services/db.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-students',
  template: `
    <ul>
      <li *ngFor="let info of studentsData">
        <a [routerLink]="['','profile',info.id]">{{info.name}}</a>
      </li>
    </ul>
  `
})
export class StudentsComponent implements OnInit {
  studentsData:object[];
  @Output()student:EventEmitter<string>;
  constructor(private data: DbService) {
    this.student = new EventEmitter();
  }

  ngOnInit() {
    this.studentsData = this.data.getData();
  }

}
