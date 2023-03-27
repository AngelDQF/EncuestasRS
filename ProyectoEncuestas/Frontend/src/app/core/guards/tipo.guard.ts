import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwt_decode from 'jwt-decode';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoGuard implements CanActivate {
   aprobacion: boolean;
  constructor(private cookie: CookieService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  checkTipoUser(): boolean {
    try {
      const token = (this.getDecodedAccessToken(this.cookie.get('token'))).tipo;
      //Obtenemos el tipo de usuario
      const tipo= this.getDecodedAccessToken(token);
      const validarTipo= this.getDecodedAccessToken(tipo);
      if (!validarTipo) {
        this.router.navigate(['/']);
      }
      return token;
    } catch (error) {
      console.log("Algo Sucedio ?? \uD83D\uDD34", error)
      return false
    }
  };

  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  validacion(tokenResponse: any): void {
    if (tokenResponse == 1) {
      this.aprobacion = false;
    } else if (tokenResponse == 2) {
      this.aprobacion = true;
    }
  }
}
