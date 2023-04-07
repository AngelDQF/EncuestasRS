import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  isExpanded:boolean;

  token = this.cookieToken.get('token');
  tokenString: any;
  aprobacion: boolean = false;
  inicio: any = null;
  si: number = 0;
  constructor(private cookieToken: CookieService,private router: Router) {
  }
  ngOnInit(): void {
    this.tokenString = (this.getDecodedAccessToken(this.token)).tipo;
    this.validacion(this.tokenString);
    this.isExpanded = true;
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
    try{
    let result = confirm("¿Está seguro que desea salir?");
    if (result==true) {
      this.cookieToken.delete('token');
      this.si = 0;
      this.aprobacion = false;
      this.router.navigate(['/auth']);
    } else {
      this.inicio = null;
    }}catch(error){
      console.log(error);
    }
  }
}
