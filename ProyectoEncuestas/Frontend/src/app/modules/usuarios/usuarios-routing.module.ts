import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionesComponent } from './pages/asignaciones/asignaciones.component';
import { ListarUsuariosComponent } from './pages/listar-usuarios/listar-usuarios.component';
import { UsuariosDeactivadosComponent } from './pages/listar-usuarios/usuarios-desactivados.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { MyuserComponent } from './pages/myuser/myuser.component';
import { EditarUsuariosComponent } from './pages/editar-usuarios/editar-usuarios.component';
import { EncuestasUserComponent } from './pages/encuestas-user/encuestas-user.component';
import { TipoGuard } from '@guards/tipo.guard';

const routes: Routes = [
  {path:'',children:[
    {path:'',component:ListarUsuariosComponent},
    {path:'desactivados',component:UsuariosDeactivadosComponent,canActivate:[TipoGuard]},
    {path:'agregar',component:UsuariosComponent,canActivate:[TipoGuard]},
    {path:'asignaciones/:id',component:AsignacionesComponent,canActivate:[TipoGuard]},
    {path:'miuser',component:MyuserComponent},
    {path:'editar/:id',component:EditarUsuariosComponent,canActivate:[TipoGuard]},
    {path:'user/:id',component:EncuestasUserComponent,canActivate:[TipoGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
