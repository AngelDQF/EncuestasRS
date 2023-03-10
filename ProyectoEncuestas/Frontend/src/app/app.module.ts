import { RecursosService } from './services/recursos.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './modules/usuarios/listar_usuarios/listar_usuarios.component';
import { UsuariosService } from './services/usuarios.service';
import { UsuariosDeactivadosComponent } from './modules/usuarios/listar_usuarios/usuarios_desactivados';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { JuntaService } from './services/junta.service';
import { OrganizacionesService } from './services/organizaciones.service';
import { ServiciosService } from './services/servicios.service';
import { FinanciamientosService } from './services/financiamientos.service';
import { RequerimientosService } from './services/requerimientos.service';
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    UsuariosDeactivadosComponent,
    UsuariosComponent,
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
