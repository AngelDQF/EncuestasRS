import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuariosDeactivadosComponent } from './pages/listar-usuarios/usuarios-desactivados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '@serv/usuarios.service';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { EncuestasService } from '@serv/encuestas.service';
import { MyuserComponent } from './pages/myuser/myuser.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { EncuestasUserComponent } from './pages/encuestas-user/encuestas-user.component';
import { MaterialExampleModule } from '@AM/*';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    UsuariosComponent,
    ListarUsuariosComponent,
    UsuariosDeactivadosComponent,
    AsignacionesComponent,
    MyuserComponent,
    EditarUsuariosComponent,
    EncuestasUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    MaterialExampleModule,
    SharedModule
  ],
  providers: [
    UsuariosService, EncuestasService
  ]
})
export class UsuariosModule { }
