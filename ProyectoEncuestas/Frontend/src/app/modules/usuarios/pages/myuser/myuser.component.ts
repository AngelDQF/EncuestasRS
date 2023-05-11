import { UsersInterface } from '@models/usuarios/users.interface';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from '@serv/usuarios.service';
import { InfoComponent, RestablecerPasswordComponent } from '@shared/components';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-myuser',
  templateUrl: './myuser.component.html',
  styleUrls: ['./myuser.component.css', '../../../../app.component.css']
})
export class MyuserComponent implements OnInit {
  nombre: string = '';
  tel: string = '';
  dni: string = '';
  email: string = '';
  creado: string = '';
  cambio: string = '';
  sexo: string = '';
  idUser: any;
  message: string = "";
  constructor(private userModel: UsuariosService, private dialog: MatDialog, private cookie: CookieService) {
    this.getUser(this.getUserID());
  }
  ngOnInit(): void {

  }
  getUserID() {
    try {
      return this.idUser = (this.getDecodedAccessToken(this.cookie.get('token'))).id;
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getUser(id: any) {
    try {
      this.userModel.getUsuarioById(id).subscribe((data: UsersInterface[]) => {
        this.sexo = data[0].sexo;
        this.tel = data[0].tel;
        this.dni=data[0].dni
        this.email=data[0].email;
        this.creado=data[0].creado;
        this.cambio=data[0].cambio;
        this.obtenerMessage(this.sexo);
        this.nombre = data[0].name;
      })
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  obtenerMessage(sexo: string) {
    if (sexo == "Hombre") {
      this.message = "Bienvenido";
    } else if (sexo == "Mujer") {
      this.message = "Bienvenida";
    } else {
      this.message = "Bienvenid@";
    }
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
    } catch (error) {
      console.log(error);
    }
  }
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  cambiar() {
    try {
      this.dialog.open(RestablecerPasswordComponent, {
        width: '400px',
        data: [this.idUser, "Desactivar", 2],
      });
    } catch (error) {
      console.log(error);
    }
  }
}
