import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';
import { AuthService } from '@serv/auth.service';
import { SharedModule } from '@shared/shared.module';
import { MaterialExampleModule } from '@AM/*';
@NgModule({
  declarations: [LoginComponent, RecuperarComponent, RecuperarComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [
    AuthService,
    SharedModule,
  ],
  entryComponents: [
    RecuperarComponent
  ]
})
export class AuthModule { }
