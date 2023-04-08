import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuariosDeactivadosComponent } from './pages/listar-usuarios/usuarios-desactivados.component';
import { SharedModule } from '@shared/shared.module';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '@serv/usuarios.service';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { EncuestasService } from '@serv/encuestas.service';
import { MatTableModule, } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    UsuariosComponent,
    ListarUsuariosComponent,
    SearchPipe,
    UsuariosDeactivadosComponent,
    AsignacionesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [
    UsuariosService, EncuestasService
  ]
})
export class UsuariosModule { }
