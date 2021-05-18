import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ClientUserService } from './services/ClientUser.service';

@Injectable({
  providedIn: 'root'
})
export class ResAuthGuard implements CanActivate {

  returnUrl!:string;

  constructor(private ClientuserService: ClientUserService, private router: Router) {

  }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot){
  
        let isClientLoggedIn = this.ClientuserService.isClientLoggedIn();
  
        if (isClientLoggedIn) {
          return true;
        }else{
          this.router.navigate(['/LoginClient']);
          
          return false;
        }/*this.router.navigate(['/LoginClient'], { queryParams: { returnUrl: state.url }});
      return false;*/
      } 
      
    
  }
