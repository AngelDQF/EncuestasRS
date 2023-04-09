import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@serv/auth.service';
import { CookieService } from 'ngx-cookie-service';
import {RecuperarComponent} from '../recuperar/recuperar.component'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorSesion: boolean;
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

  constructor(private modelAuth: AuthService,private cookie:CookieService, private router:Router, private recuperar:MatDialog) { }
  ngOnInit(): void {
    this.errorSesion = false
  }

  onLogin() {
    const { email, password } = this.formLogin.value;
    this.modelAuth.sendCredentials(email, password).subscribe(
      responseOk => {//TODO: Aqui se entrara si todo se cumple
        this.errorSesion = false;
        const {data,token}=responseOk.data
        this.cookie.set('token',token,1,'/');
        console.log('Sesión Iniciada Correctamente'	);
        this.router.navigate(['/'])
      },
      err => {//TODO: Aqui entraran los errores
        this.errorSesion = true
        console.log('Usuario o Contraseña Invalidos');
      }
    );
  }
  openDialog(): void {
    const dialogRef = this.recuperar.open(RecuperarComponent, {
      width: '400px',

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
