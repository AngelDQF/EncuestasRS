import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuariosDeactivadosComponent } from './pages/listar-usuarios/usuarios-desactivados.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    ListarUsuariosComponent,
    UsuariosDeactivadosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
  ]
})
export class UsuariosModule { }
