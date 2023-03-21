import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@serv/auth.service';
import { CookieService } from 'ngx-cookie-service';
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

  constructor(private modelAuth: AuthService,private cookie:CookieService, private router:Router) { }
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
}
