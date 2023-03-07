import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosComponent } from './datos/datos.component';
import { JuntaComponent } from './junta/junta.component';
import { AdministrarComponent } from './administrar/administrar.component';
import { ListarComponent } from './listar_usuarios/listar_usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosDeactivadosComponent } from './listar_usuarios/usuarios_desactivados';
import { IndexComponent } from './shared/index/index.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { JuntaService } from './services/junta.service';
import {EjesDesactivadosComponent}from  './junta/ejes/ejes.desactivados.component';
import { CargosDesactivadosComponent } from './junta/cargos/cargos-desactivados.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { OrganizacionesService } from './services/organizaciones.service';
import { EjesComponent } from './junta/ejes/ejes.component';
import { CargosComponent } from './junta/cargos/cargos.component';
import { OrganizacionesComponent } from './organizacion/organizaciones/organizaciones.component';
import { OrganizacionesTiposComponent } from './organizacion/organizaciones-tipos/organizaciones-tipos.component';
import { OrganizacionesTiposDesactivadosComponent } from './organizacion/organizaciones-tipos/organizaciones-tipos-desactivados.component';
import { OrganizacionesDesactivadosComponent } from './organizacion/organizaciones/organizaciones-desactivados.component';
import { ErrorComponent } from './shared/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosComponent,
    JuntaComponent,
    AdministrarComponent,
    ListarComponent,
    UsuariosDeactivadosComponent,
    IndexComponent,
    UsuariosComponent,
    LoginComponent,
    EncuestasComponent,
    NavbarComponent,
    HeaderComponent,
    EjesComponent,
    CargosComponent,
    EjesDesactivadosComponent,
    CargosDesactivadosComponent,
    OrganizacionComponent,
    OrganizacionesComponent,
    OrganizacionesTiposComponent,
    OrganizacionesTiposDesactivadosComponent,
    OrganizacionesDesactivadosComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuariosService,OrganizacionesService,JuntaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
