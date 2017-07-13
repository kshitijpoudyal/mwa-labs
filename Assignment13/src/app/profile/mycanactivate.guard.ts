import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, ActivatedRoute, Router} from "@angular/router";
import { Observable } from "rxjs/Rx";
import {DbService} from "../services/db.service";
import {Injectable} from "@angular/core";

@Injectable()
export class MyCanActivateGuard implements CanActivate {

  constructor(private data: DbService, private router: Router){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if(this.data.getDataFromId(route.params['id'])){
      return true;
    }
    this.router.navigate(['home']);

  }
}
