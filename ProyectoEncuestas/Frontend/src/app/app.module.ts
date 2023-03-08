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
import { FinanciamientosComponent } from './financiamientos/financiamientos.component';
import { FinanciamientosService } from './services/financiamientos.service';
import { TiposFinanciamientosDesactivadosComponent } from './financiamientos/tipos/tipos-financiamientos-desactivados.component';
import { TiposFinanciamientosComponent } from './financiamientos/tipos/tipos-financiamientos.component';
import { FuentesFinanciamientosComponent } from './financiamientos/fuentes/fuentes-financiamientos.component';
import { FuentesFinanciamientosDesactivadasComponent } from './financiamientos/fuentes/fuentes-financiamientos-desactivadas.component';
import { RequerimientosComponent } from './requerimientos/requerimientos.component';
import { MercadosComponent } from './requerimientos/mercados/mercados.component';
import { MercadosDesactivadosComponent } from './requerimientos/mercados/mercados-desactivados.component';
import { UsosTierrasComponent } from './requerimientos/tierras/usos-tierras/usos-tierras.component';
import { TenenciaTierrasComponent } from './requerimientos/tierras/tenencia-tierras/tenencia-tierras.component';
import { TenenciaTierrasDesactivadasComponent } from './requerimientos/tierras/tenencia-tierras/tenencia-tierras-desactivadas.component';
import { UsosTierrasDesactivadosComponent } from './requerimientos/tierras/usos-tierras/usos-tierras-desactivados.component';
import { EstructurasComponent } from './requerimientos/estructuras/estructuras.component';
import { EstructurasDesactivadasComponent } from './requerimientos/estructuras/estructuras-desactivadas.component';
import { RequerimientosService } from './services/requerimientos.service';

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
    FinanciamientosComponent,
    TiposFinanciamientosDesactivadosComponent,
    TiposFinanciamientosComponent,
    FuentesFinanciamientosComponent,
    FuentesFinanciamientosDesactivadasComponent,
    RequerimientosComponent,
    MercadosComponent,
    MercadosDesactivadosComponent,
    UsosTierrasComponent,
    TenenciaTierrasComponent,
    TenenciaTierrasDesactivadasComponent,
    UsosTierrasDesactivadosComponent,
    EstructurasComponent,
    EstructurasDesactivadasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuariosService,OrganizacionesService,ServiciosService,JuntaService,RecursosService,FinanciamientosService,RequerimientosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
