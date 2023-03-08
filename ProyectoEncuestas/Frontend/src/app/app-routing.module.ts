import { TipoSueloDesactivadosComponent } from './recursos/tipo-suelo/tipo-suelo-desactivados.component';
import { TipoSueloComponent } from './recursos/tipo-suelo/tipo-suelo.component';
import { BosquesDesactivadosComponent } from './recursos/bosques/bosques-desactivados.component';
import { BosquesComponent } from './recursos/bosques/bosques.component';
import { RecursosComponent } from './recursos/recursos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { IndexComponent } from './shared/components/index/index.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdministrarComponent } from './administrar/administrar.component';
import { ListarComponent } from './listar_usuarios/listar_usuarios.component';
import { UsuariosDeactivadosComponent } from './listar_usuarios/usuarios_desactivados';
import { JuntaComponent } from './junta/junta.component';
import { EjesComponent } from './junta/ejes/ejes.component';
import { CargosComponent } from './junta/cargos/cargos.component';
import { EjesDesactivadosComponent } from './junta/ejes/ejes.desactivados.component';
import { CargosDesactivadosComponent } from './junta/cargos/cargos-desactivados.component';
import { OrganizacionComponent } from './organizacion/organizacion.component';
import { OrganizacionesTiposComponent } from './organizacion/organizaciones-tipos/organizaciones-tipos.component';
import { OrganizacionesComponent } from './organizacion/organizaciones/organizaciones.component';
import { OrganizacionesDesactivadosComponent } from './organizacion/organizaciones/organizaciones-desactivados.component';
import { OrganizacionesTiposDesactivadosComponent } from './organizacion/organizaciones-tipos/organizaciones-tipos-desactivados.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BasicosComponent } from './servicios/basicos/basicos.component';
import { BasicosDesactivadosComponent } from './servicios/basicos/basicos-desactivados.component';
import { LocalesComponent } from './servicios/locales/locales.component';
import { LocalesDesactivadosComponent } from './servicios/locales/locales-desactivados.component';
import { FinanciamientosComponent } from './financiamientos/financiamientos.component';
import { TiposFinanciamientosComponent } from './financiamientos/tipos/tipos-financiamientos.component';
import { TiposFinanciamientosDesactivadosComponent } from './financiamientos/tipos/tipos-financiamientos-desactivados.component';
import { FuentesFinanciamientosDesactivadasComponent } from './financiamientos/fuentes/fuentes-financiamientos-desactivadas.component';
import { FuentesFinanciamientosComponent } from './financiamientos/fuentes/fuentes-financiamientos.component';
const routes: Routes = [
  { path: '', component: IndexComponent },
  {
    path: 'usuarios',
    children: [
      { path: '', component: ListarComponent },
      { path: 'agregar', component: UsuariosComponent },
      { path: 'desactivados', component: UsuariosDeactivadosComponent }
    ],
    // children: [{ path: 'agregar', component: FormularioComponent }, { path: ':id', component: FormularioComponent },],
  },
  {
    path: 'administrar',
    children: [
      { path: '', component: AdministrarComponent },
      {
        path: 'junta',
        children: [
          { path: '', component: JuntaComponent },
          {
            path: 'ejes', children: [
              { path: '', component: EjesComponent },
              { path: 'desactivados', component: EjesDesactivadosComponent }
            ]
          },
          {
            path: 'cargos', children: [
              { path: '', component: CargosComponent },
              { path: 'desactivados', component: CargosDesactivadosComponent }
            ]
          },

        ]
      },
      {
        path: 'org', children: [
          { path: '', component: OrganizacionComponent },
          {
            path: 'organizaciones', children: [
              { path: '', component: OrganizacionesComponent },
              { path: 'desactivados', component: OrganizacionesDesactivadosComponent }
            ]
          },
          {
            path: 'tipos', children: [
              { path: '', component: OrganizacionesTiposComponent },
              { path: 'desactivados', component: OrganizacionesTiposDesactivadosComponent }
            ]
          }
        ]
      },
      {
        path: 'servicios', children: [
          { path: '', component: ServiciosComponent },
          {
            path: 'basicos', children: [
              { path: '', component: BasicosComponent },
              { path: 'desactivados', component: BasicosDesactivadosComponent }
            ]
          },
          {
            path: 'locales', children: [
              { path: '', component: LocalesComponent },
              { path: 'desactivados', component: LocalesDesactivadosComponent }
            ]
          },
        ]
      },
      {
        path: 'rn', children: [
          { path: '', component: RecursosComponent },

          {
            path: 'bosques', children: [
              { path: '', component: BosquesComponent },
              { path: 'desactivados', component: BosquesDesactivadosComponent }
            ]
          },
          {
            path: 'suelos', children: [
              { path: '', component: TipoSueloComponent },
              { path: 'desactivados', component: TipoSueloDesactivadosComponent }
            ]
          },
        ]
      },
      {
        path: 'financiamientos', children: [
          { path: '', component: FinanciamientosComponent },
          {
            path: 'tipos', children: [
              { path: '', component: TiposFinanciamientosComponent },
              { path: 'desactivados', component: TiposFinanciamientosDesactivadosComponent }
            ]
          },
          {
            path: 'fuentes', children: [
              { path: '', component:  FuentesFinanciamientosComponent},
              { path: 'desactivados', component: FuentesFinanciamientosDesactivadasComponent }
            ]
          },
        ]
      },
    ]
  },
  { path: 'login', component: LoginComponent },
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
