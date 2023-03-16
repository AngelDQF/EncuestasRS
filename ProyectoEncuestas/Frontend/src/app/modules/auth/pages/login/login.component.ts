import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@serv/auth.service';
import { LoginInterface } from '@models/auth/login.interface';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
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

  constructor(private modelAuth: AuthService) { }
  ngOnInit(): void { }
  
  onLogin(form: LoginInterface) {
    this.modelAuth.loginByEmail(form).subscribe(data=>{
      console.log(data);
    })
  }
}
