import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ListarComponent } from '@modules/usuarios/listar_usuarios/listar_usuarios.component';
import { UsuariosDeactivadosComponent } from '@modules/usuarios/listar_usuarios/usuarios_desactivados';
import { ErrorComponent } from '@shared/components/error/error.component';
import { HomeComponent } from '@modules/home/home/home.component';
import { LoginComponent } from '@modules/auth/login/login.component';
import { EncuestasComponent } from '@modules/ecuestas/encuestas/encuestas.component';
const routes: Routes = [
  { path: '', component: HomeComponent,
  loadChildren:()=>import('@modules/home/home.module').then(m=>m.HomeModule) },
  {
    path: 'usuarios',
    children: [
      { path: '', component: ListarComponent },
      { path: 'agregar', component: UsuariosComponent },
      { path: 'desactivados', component: UsuariosDeactivadosComponent }
    ],
    // children: [{ path: 'agregar', component: FormularioComponent }, { path: ':id', component: FormularioComponent },],
  },
  { path: 'auth', component: LoginComponent },
  { path: 'encuestas', component: EncuestasComponent },

  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
export const routingComponents = [IndexComponent, UsuariosComponent, LoginComponent, EncuestasComponent, NavbarComponent];*/
