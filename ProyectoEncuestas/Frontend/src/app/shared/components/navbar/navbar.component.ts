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
  aprobacion: boolean = false;
  inicio: any = null;
  si: number = 0;
  constructor(private cookieToken: CookieService) {
  }
  ngOnInit(): void {
    this.tokenString = (this.getDecodedAccessToken(this.token)).tipo;
    this.validacion(this.tokenString);
  }
  validacion(tokenResponse: any): void {
    do {
      if (tokenResponse == 1) {
        this.aprobacion = false;
      } else if (tokenResponse == 2) {
        this.aprobacion = true;
        this.si = 1;
      }
    } while (this.si == 0)
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
      this.si = 0;
      this.aprobacion = false;
      this.inicio = "/auth"
    } else {
      this.inicio = null;
    }
  }
}
