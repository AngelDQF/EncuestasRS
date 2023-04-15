import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuariosDeactivadosComponent } from './pages/listar-usuarios/usuarios-desactivados.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MyuserComponent } from './pages/myuser/myuser.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { EncuestasUserComponent } from './pages/encuestas-user/encuestas-user.component';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:ListarUsuariosComponent},
    {path:'desactivados',component:UsuariosDeactivadosComponent},
    {path:'agregar',component:UsuariosComponent},
    {path:'asignaciones/:id',component:AsignacionesComponent},
    {path:'miuser',component:MyuserComponent},
    {path:'editar/:id',component:EditarUsuariosComponent},
    {path:'user/:id',component:EncuestasUserComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
