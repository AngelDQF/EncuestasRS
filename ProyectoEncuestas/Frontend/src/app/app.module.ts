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
import { IndexComponent } from './index/index.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { JuntaService } from './services/junta.service';
import { EjesComponent } from './junta/ejes/ejes.component';
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
    EjesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [UsuariosService,JuntaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
