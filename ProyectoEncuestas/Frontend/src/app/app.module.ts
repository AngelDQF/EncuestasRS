import { RecursosService } from '@serv/recursos.service';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JuntaService } from '@serv/junta.service';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { ServiciosService } from '@serv/servicios.service';
import { FinanciamientosService } from '@serv/financiamientos.service';
import { RequerimientosService } from '@serv/requerimientos.service';
import { UsuariosService } from '@serv/usuarios.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UsuariosService,
    OrganizacionesService,
    ServiciosService,
    JuntaService,
    RecursosService,
    FinanciamientosService,
    RequerimientosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
