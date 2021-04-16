import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientUserService } from './services/ClientUser.service';

@Injectable({
  providedIn: 'root'
})
export class ResAuthGuard implements CanActivate {

  constructor(private ClientuserService: ClientUserService, private router: Router) {

  }

    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  
        let isClientLoggedIn = this.ClientuserService.isClientLoggedIn();
  
        if (isClientLoggedIn) {
          return true;
        }else{
          this.router.navigate(['/LoginClient']);
          return false;
        }
        return true;
      }
    
  }
