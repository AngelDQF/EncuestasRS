import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuariosDeactivadosComponent } from './pages/listar-usuarios/usuarios-desactivados.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {path:'',component:ListarUsuariosComponent},
  {path:'desactivados',component:UsuariosDeactivadosComponent},
  {path:'agregar',component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
