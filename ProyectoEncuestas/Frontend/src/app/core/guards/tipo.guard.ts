import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwt_decode from 'jwt-decode';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoGuard implements CanActivate {
  token: any;
  aprobacion: boolean;
  constructor(private cookie: CookieService, private router: Router) {
    this.token = (this.getDecodedAccessToken(this.cookie.get('token'))).tipo;
    if (this.token == 2) {
      this.aprobacion = true;
    } else if (this.token == 2) {
      this.aprobacion = false;
    }
  }
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canActivate(): boolean {
    if (this.aprobacion==true) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
}
