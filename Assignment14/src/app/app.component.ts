import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GetUserPostService} from "app/services/get-user-post.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  public user={
    name:'',email:'',post:''
  };

  constructor(private formBuilder: FormBuilder,private userPostService: GetUserPostService){
    this.myForm = formBuilder.group({
      'name': ['', Validators.required],
      'email':['',Validators.required],
      'post':['',[Validators.required, Validators.minLength(10)]]
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }
  onSubmit() {
    console.log(this.user);
  }

  getData(){
    this.userPostService.getUser().subscribe(
     (response)=>{
       this.user['name'] = response.name;
       this.user['email'] = response.email;
     }
    );

    this.userPostService.getPost().subscribe(
      (response)=>{
        this.user['post'] = response[1].title;
      }
    );
  }

}
