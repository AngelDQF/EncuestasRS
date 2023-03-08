import { RecursosService } from './services/recursos.service';
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
import { IndexComponent } from './shared/components/index/index.component';
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
import { ErrorComponent } from './shared/components/error/error.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LocalesComponent } from './servicios/locales/locales.component';
import { LocalesDesactivadosComponent } from './servicios/locales/locales-desactivados.component';
import { BasicosComponent } from './servicios/basicos/basicos.component';
import { BasicosDesactivadosComponent } from './servicios/basicos/basicos-desactivados.component';
import { ServiciosService } from './services/servicios.service';
import { RecursosComponent } from './recursos/recursos.component';
import { BosquesComponent } from './recursos/bosques/bosques.component';
import { BosquesDesactivadosComponent } from './recursos/bosques/bosques-desactivados.component';
import { TipoSueloComponent } from './recursos/tipo-suelo/tipo-suelo.component';
import { TipoSueloDesactivadosComponent } from './recursos/tipo-suelo/tipo-suelo-desactivados.component';

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
    ErrorComponent,
    ServiciosComponent,
    LocalesComponent,
    LocalesDesactivadosComponent,
    BasicosComponent,
    BasicosDesactivadosComponent,
    RecursosComponent,
    BosquesComponent,
    BosquesDesactivadosComponent,
    TipoSueloComponent,
    TipoSueloDesactivadosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuariosService,OrganizacionesService,ServiciosService,JuntaService,RecursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
