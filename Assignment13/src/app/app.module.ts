import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentsComponent } from './students/students.component';
import { routeCollection} from "./app.routes";
import { DbService} from "./services/db.service";
import { ProfileComponent } from './profile/profile.component';
import {ActivatedRoute} from "@angular/router";
import {MyCanActivateGuard} from "./profile/mycanactivate.guard";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    StudentsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routeCollection
  ],
  providers: [DbService,MyCanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
