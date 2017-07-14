import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class GetUserPostService {

  constructor(public http: Http) {

  }
  getUser(){
    return this.http.get("http://jsonplaceholder.typicode.com/users/1").map((res) => res.json());
  }

  getPost(){
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId=1").map((res) => res.json());
  }

}
