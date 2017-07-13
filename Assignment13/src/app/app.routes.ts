import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "./home-page/home-page.component";
import {StudentsComponent} from "./students/students.component";
import {ProfileComponent} from "./profile/profile.component";
import {MyCanActivateGuard} from "./profile/mycanactivate.guard";
/**
 * Created by kcp on 7/13/17.
 */
const MY_ROUTES:Routes=[
  { path: '', component: HomePageComponent },
  { path: 'home', redirectTo: '/'},
  { path: 'students', component: StudentsComponent},
  { path: 'profile/:id',canActivate:[MyCanActivateGuard] ,component: ProfileComponent}
];
export const routeCollection = RouterModule.forRoot(MY_ROUTES);
