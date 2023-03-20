import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private cookie: CookieService, private router: Router) {


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkCookieSession(); //TODO: Guardian de la sesion, se encargara de identificar si existe un token
  }
  checkCookieSession(): boolean {
    try {
      const token: boolean = this.cookie.check('token');//Buscamos si hay una cookie con este nombre
      if (!token) {
        this.router.navigate(['/', 'auth']);
      }
      return token;
    } catch (error) {
      console.log("Algo Sucedio ?? \uD83D\uDD34", error)
      return false
    }
  };
}
