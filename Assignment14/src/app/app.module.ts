import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {GetUserPostService} from "app/services/get-user-post.service";
import {Http, HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule
  ],
  providers: [GetUserPostService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
