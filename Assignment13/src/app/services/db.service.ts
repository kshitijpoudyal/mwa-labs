import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  data:object[]= [{id:'1',
    'name':'Asaad Saad',
    'stuId':'12345',
    'email':'asaad@mum.edu'},
    {id:'2',
      'name':'Kshitij',
      'stuId':'2345',
      'email':'kpoudyal@mum.edu'},
    {id:'3',
      'name':'Sulav',
      'stuId':'3456',
      'email':'kpoudyal@mum.edu'}];

  constructor() { }

  getData():object[]{
    return this.data;
  }

  getDataFromId(id:number):object{
    for(let info of this.data){
      if(id===info['id']){
        return info;
      }
    }

  }
}
