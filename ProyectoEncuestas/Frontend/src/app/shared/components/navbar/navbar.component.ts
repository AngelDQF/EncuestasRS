import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../../app.component.css']
})
export class NavbarComponent implements OnInit {
  token = this.cookieToken.get('token');
  tokenString: any;
  aprobacion: boolean;
  inicio: any;
  constructor(private cookieToken: CookieService) {
    this.inicio = null;
  }
  ngOnInit(): void {
    this.tokenString = (this.getDecodedAccessToken(this.token)).tipo;
    this.validacion(this.tokenString);
  }
  validacion(tokenResponse: any): void {
    if (tokenResponse == 1) {
      this.aprobacion = false;
    } else if (tokenResponse == 2) {
      this.aprobacion = true;
    }
  }
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  cerrarSesion(event: any) {
    let result = confirm("¿Está seguro que desea salir?");
    if (result) {
      this.cookieToken.delete('token');
      this.inicio="/auth"
    }else{
      this.inicio=null;
    }
  }
}
