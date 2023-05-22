import { LoginInterface } from '@models/auth/login.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@serv/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { RecuperarComponent } from '../recuperar/recuperar.component'
import { InfoComponent } from '@shared/components';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorSesion: boolean;
  token: any;
  hide: boolean;
  eye: boolean;
  eyeOff: boolean;
  inicio: boolean;
  formLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  });
  formNew = new FormGroup({
    key: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private modelAuth: AuthService, private cookie: CookieService, private router: Router, private dialog: MatDialog) {
    this.comprobarUsers();
  }
  ngOnInit(): void {
    this.errorSesion = false
  }

  onLogin() {
    try {
      const { email, password } = this.formLogin.value;
      this.modelAuth.sendCredentials(email, password).subscribe(({ token }: LoginInterface) => {//TODO: Aqui se entrara si todo se cumple
        this.token = token;
        if (this.token == "400") {
          this.errorSesion = true;
        } else {
          this.cookie.set('token', this.token, 1, '/');
          console.log('Sesión Iniciada Correctamente');
          this.router.navigate(['/']);
        }
      });
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RecuperarComponent, {
      width: '400px',
    });
    dialogRef.afterClosed();
  }
  cambio() {
    if (this.hide) {
      this.hide = false;
      this.eye = true;
      this.eyeOff = false;
    } else {
      this.hide = true;
      this.eye = false;
      this.eyeOff = true;
    }
  }
  comprobarUsers() {
    try {
      this.modelAuth.comprobarUsuarios().subscribe(data => {
        this.inicio = data
        console.log(this.inicio);
      })
    } catch (error) {
      this.mensaje("Error:", `${error}`, 3);
    }
  }
  newUser() {
    try {
      const { key, password } = this.formNew.value;
      this.modelAuth.comprobarUsuarios().subscribe(data => {
        if(data){
          this.modelAuth.createFirst(key,password).subscribe((data:any)=>{
            if (data.estado == 1) {
              this.mensaje("Advertencia", `${data.mensaje}`, 1);
            } else if (data.estado == 2) {
              this.mensaje("Información", `${data.mensaje}`, 2);
            } else {
              this.mensaje("Error", `${data.mensaje}`, 3);
            }
          });
        }else{
          this.mensaje("Advertencia","Ya se ha creado el usuario administrador",1);
          location.reload()
        }
      })
    } catch (error) {
      this.mensaje("Error:", `${error}`, 3);
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
}
