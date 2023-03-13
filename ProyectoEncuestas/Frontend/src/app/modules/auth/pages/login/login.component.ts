import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form=[]
  loginForm = new FormGroup({
    usuario: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor() { }
  ngOnInit(): void { }
  username: string;
  password: string;

  onSubmit() {
    // Lógica de autenticación aquí
  }
  onLogin(form: any) {
    console.log(form);
  }
}
