import { RecursosService } from './services/recursos.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './listar_usuarios/listar_usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosDeactivadosComponent } from './listar_usuarios/usuarios_desactivados';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { JuntaService } from './services/junta.service';
import { OrganizacionesService } from './services/organizaciones.service';
import { ServiciosService } from './services/servicios.service';
import { FinanciamientosService } from './services/financiamientos.service';
import { RequerimientosService } from './services/requerimientos.service';
import {SharedModule} from '@shared/shared.module'
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    UsuariosDeactivadosComponent,
    UsuariosComponent,
    LoginComponent,
    EncuestasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [UsuariosService,OrganizacionesService,ServiciosService,JuntaService,RecursosService,FinanciamientosService,RequerimientosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
