import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ClientUserService } from './services/ClientUser.service';
import { CentreUserService } from './services/CentreUser.service';

@Injectable({
  providedIn: 'root'
})
export class ResAuthGuard implements CanActivate {

  returnUrl!:string;

  constructor(private ClientuserService: ClientUserService, private CentreuserService: CentreUserService, private router: Router) {

  }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot){
  
        let isClientLoggedIn = this.ClientuserService.isClientLoggedIn();
        let isLoggedIn = this.CentreuserService.isLoggedIn();
  
        if (isClientLoggedIn) {
          return true;
        }else if (isLoggedIn) {
          this.router.navigate(['/Home']);
          
          return false;
        }
        else{
          this.router.navigate(['/LoginClient']);
          
          return false;}
        /*this.router.navigate(['/LoginClient'], { queryParams: { returnUrl: state.url }});
      return false;*/
      } 
      
    
  }
