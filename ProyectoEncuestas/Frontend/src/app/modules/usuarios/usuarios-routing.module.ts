import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuariosDeactivadosComponent } from './pages/listar-usuarios/usuarios-desactivados.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MyuserComponent } from './pages/myuser/myuser.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:ListarUsuariosComponent},
    {path:'desactivados',component:UsuariosDeactivadosComponent},
    {path:'agregar',component:UsuariosComponent},
    {path:'asignaciones',component:AsignacionesComponent},
    {path:'miuser',component:MyuserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
