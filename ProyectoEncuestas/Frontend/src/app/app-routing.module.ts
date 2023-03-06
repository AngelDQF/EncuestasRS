import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdministrarComponent } from './administrar/administrar.component';
import { ListarComponent } from './listar_usuarios/listar_usuarios.component';
import { UsuariosDeactivadosComponent } from './listar_usuarios/usuarios_desactivados';
import { JuntaComponent } from './junta/junta.component';
import { EjesComponent } from './junta/ejes/ejes.component';
import { CargosComponent } from './junta/cargos/cargos.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'usuarios',
    children: [
    {path:'',component:ListarComponent},
    { path: 'agregar', component: UsuariosComponent },
    {path: 'desactivados',component:UsuariosDeactivadosComponent}
    ],
    // children: [{ path: 'agregar', component: FormularioComponent }, { path: ':id', component: FormularioComponent },],
  },
  {
    path:'administrar',
    children:[
      {path:'',component: AdministrarComponent},
      {path:'junta',
    children:[
      {path:'',component: JuntaComponent},
      {path:'ejes',component:EjesComponent},
      {path:'cargos',component:CargosComponent},

    ]},
      {path:'junta/ejes',component: JuntaComponent},
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'encuestas', component: EncuestasComponent },

  // { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
export const routingComponents = [IndexComponent, UsuariosComponent, LoginComponent, EncuestasComponent, NavbarComponent];*/