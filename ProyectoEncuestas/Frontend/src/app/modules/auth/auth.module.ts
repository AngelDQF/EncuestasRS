import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { AuthService } from '@serv/auth.service';

@NgModule({
  declarations: [LoginComponent, RecuperarComponent, RecuperarComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
