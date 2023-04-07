import { RecursosService } from '@serv/recursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JuntaService } from '@serv/junta.service';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { ServiciosService } from '@serv/servicios.service';
import { FinanciamientosService } from '@serv/financiamientos.service';
import { RequerimientosService } from '@serv/requerimientos.service';
import { UsuariosService } from '@serv/usuarios.service';
import { CookieService } from 'ngx-cookie-service';
import { InjectSessionInterceptor } from './core/interceptors/inject-session.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    UsuariosService,
    OrganizacionesService,
    ServiciosService,
    JuntaService,
    RecursosService,
    FinanciamientosService,
    RequerimientosService,
    CookieService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:InjectSessionInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
