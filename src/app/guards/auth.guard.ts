import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '@services';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private store: StorageService) {

  }

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
    let user = this.store.getObject('user');
    
    let isLogged = user != null;
    
    console.log({isLogged});
    if(!isLogged){
      this.router.navigate(['login']);
    }
    return isLogged;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("children")
    return true;
  }
  
}
