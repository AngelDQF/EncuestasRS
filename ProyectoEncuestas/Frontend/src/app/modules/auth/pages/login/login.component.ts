import { LoginInterface } from '@models/auth/login.interface';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '@serv/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { RecuperarComponent } from '../recuperar/recuperar.component'
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

  constructor(private modelAuth: AuthService, private cookie: CookieService, private router: Router, private recuperar: MatDialog) { }
  ngOnInit(): void {
    this.errorSesion = false
  }

  onLogin() {
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
    }
    );
  }
  openDialog(): void {
    const dialogRef = this.recuperar.open(RecuperarComponent, {
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
}
