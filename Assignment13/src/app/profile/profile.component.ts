import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {DbService} from "app/services/db.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  template: `<h2>Profile: {{studentData.name}}</h2>
            <p>Student Id : {{studentData.stuId}}</p>
            <p>Fullname : {{studentData.name}}</p>
            <p>Email : {{studentData.email}}</p>
  `
})
export class ProfileComponent implements OnInit {
  private id:number;
  private studentData: object;
  private subscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute,private data: DbService) {
    this.subscription = activatedRoute.params.subscribe(
      (param: any) => this.id = param['id']
    );
  }

  ngOnInit() {
    this.studentData = this.data.getDataFromId(this.id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
