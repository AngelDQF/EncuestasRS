import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@serv/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup=new FormGroup({});

  constructor(private modelAuth:AuthService) { }
  ngOnInit(): void {
    this.formLogin=new FormGroup(
      {
        email:new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        password:new FormControl('',[
          Validators.required,
          Validators.minLength(8)
        ])
      }
    )
   }
   sendLogin():void{
    const{email,password}=this.formLogin.value;
    this.modelAuth.sendCredentials(email,password);
   }
}
