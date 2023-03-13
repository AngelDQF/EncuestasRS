import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

@NgModule({
  declarations: [LoginComponent, RecuperarComponent,RecuperarComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
