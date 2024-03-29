import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CerrarSesionComponent } from '@shared/components';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  isExpanded: boolean;
  btn1: string = "Mi Usuario";
  btn2: string = "Usuarios";
  btn3: string = "Encuestas";
  btn4: string = "Dashboard";
  btn5: string = "Administrar Encuestas";
  btn6: string = "Exportar";
  btn7: string = "Cerrar Sesión";
  btn8: string = "Mis Encuestas"
  btn9: string = "Cambiar Mi Contraseña";
  token: any;
  mostrar: boolean;
  constructor(private cerrar: MatDialog, private cookie: CookieService) {
    this.token = (this.getDecodedAccessToken(this.cookie.get('token'))).tipo;
    if (this.token == 2) {
      this.mostrar = true;
    } else if (this.token == 1) {
      this.mostrar = false;
    }
  }
  ngOnInit(): void {
    this.isExpanded = false;
  }
  cerrarSesion() {
    try {
      this.cerrar.open(CerrarSesionComponent, {
        width: '400px',

      });
    } catch (error) {
      console.log(error);
    }
  }
  cambio(): void {
    if (this.isExpanded) {
      this.btn1 = "";
      this.btn2 = "";
      this.btn3 = "";
      this.btn4 = "";
      this.btn5 = "";
      this.btn6 = "";
      this.btn7 = "";
      this.btn8 = "";
    } else {
      this.btn1 = "Mi Usuario";
      this.btn2 = "Usuarios";
      this.btn3 = "Encuestas";
      this.btn4 = "Dashboard";
      this.btn5 = "Administrar Encuestas";
      this.btn6 = "Exportar";
      this.btn7 = "Cerrar Sesión";
      this.btn8 = "Mis Encuestas";
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
