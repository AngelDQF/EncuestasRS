import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarComponent } from './pages/administrar/administrar.component'
import { FinanciamientosComponent } from './pages/financiamiento/financiamientos.component';
import { FuentesFinanciamientosDesactivadasComponent } from './pages/financiamiento/fuentes/fuentes-financiamientos-desactivadas.component';
import { FuentesFinanciamientosComponent } from './pages/financiamiento/fuentes/fuentes-financiamientos.component';
import { TiposFinanciamientosDesactivadosComponent } from './pages/financiamiento/tipos/tipos-financiamientos-desactivados.component';
import { TiposFinanciamientosComponent } from './pages/financiamiento/tipos/tipos-financiamientos.component';
import { CargosDesactivadosComponent } from './pages/junta/cargos/cargos-desactivados.component';
import { CargosComponent } from './pages/junta/cargos/cargos.component';
import { EjesComponent } from './pages/junta/ejes/ejes.component';
import { EjesDesactivadosComponent } from './pages/junta/ejes/ejes.desactivados.component';
import { JuntaComponent } from './pages/junta/junta.component';
import { OrganizacionComponent } from './pages/organizaciones/organizacion.component';
import { OrganizacionesTiposDesactivadosComponent } from './pages/organizaciones/organizaciones-tipos/organizaciones-tipos-desactivados.component';
import { OrganizacionesTiposComponent } from './pages/organizaciones/organizaciones-tipos/organizaciones-tipos.component';
import { OrganizacionesDesactivadosComponent } from './pages/organizaciones/organizaciones/organizaciones-desactivados.component';
import { OrganizacionesComponent } from './pages/organizaciones/organizaciones/organizaciones.component';
import { BosquesDesactivadosComponent } from './pages/recursos/bosques/bosques-desactivados.component';
import { BosquesComponent } from './pages/recursos/bosques/bosques.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { TipoSueloDesactivadosComponent } from './pages/recursos/tipo-suelo/tipo-suelo-desactivados.component';
import { TipoSueloComponent } from './pages/recursos/tipo-suelo/tipo-suelo.component';
import { EstructurasDesactivadasComponent } from './pages/requerimientos/estructuras/estructuras-desactivadas.component';
import { EstructurasComponent } from './pages/requerimientos/estructuras/estructuras.component';
import { MercadosDesactivadosComponent } from './pages/requerimientos/mercados/mercados-desactivados.component';
import { MercadosComponent } from './pages/requerimientos/mercados/mercados.component';
import { RequerimientosComponent } from './pages/requerimientos/requerimientos.component';
import { TenenciaTierrasDesactivadasComponent } from './pages/requerimientos/tierras/tenencia-tierras/tenencia-tierras-desactivadas.component';
import { TenenciaTierrasComponent } from './pages/requerimientos/tierras/tenencia-tierras/tenencia-tierras.component';
import { UsosTierrasDesactivadosComponent } from './pages/requerimientos/tierras/usos-tierras/usos-tierras-desactivados.component';
import { UsosTierrasComponent } from './pages/requerimientos/tierras/usos-tierras/usos-tierras.component';
import { BasicosDesactivadosComponent } from './pages/servicios/basicos/basicos-desactivados.component';
import { BasicosComponent } from './pages/servicios/basicos/basicos.component';
import { LocalesDesactivadosComponent } from './pages/servicios/locales/locales-desactivados.component';
import { LocalesComponent } from './pages/servicios/locales/locales.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { AldeasComponent } from './pages/ubicaciones/aldeas/aldeas.component';
import { CaseriosComponent } from './pages/ubicaciones/caserios/caserios.component';
import { DepartamentosComponent } from './pages/ubicaciones/departamentos/departamentos.component';
import { MunicipiosComponent } from './pages/ubicaciones/municipios/municipios.component';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';

const routes: Routes = [
  { path: '', component: AdministrarComponent },
  {
    path: 'junta', children: [
      { path: '', component: JuntaComponent },
      {
        path: 'cargos', children: [
          { path: '', component: CargosComponent },
          { path: 'desactivados', component: CargosDesactivadosComponent },
        ]
      },
      {
        path: 'ejes', children: [
          { path: '', component: EjesComponent },
          { path: 'desactivados', component: EjesDesactivadosComponent }
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
      }
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
      }

    ]
  },
  {
    path: 'financiamientos', children: [
      { path: '', component: FinanciamientosComponent },
      {
        path: 'fuentes', children: [
          { path: '', component: FuentesFinanciamientosComponent },
          { path: 'desactivados', component: FuentesFinanciamientosDesactivadasComponent }
        ]
      },
      {
        path: 'tipos', children: [
          { path: '', component: TiposFinanciamientosComponent },
          { path: 'desactivados', component: TiposFinanciamientosDesactivadosComponent }
        ]
      }

    ]
  },
  {
    path: 'requerimientos', children: [
      { path: '', component: RequerimientosComponent },
      {
        path: 'mercados', children: [
          { path: '', component: MercadosComponent },
          { path: 'desactivados', component: MercadosDesactivadosComponent }
        ]
      },
      {
        path: 'estructuras', children: [
          { path: '', component: EstructurasComponent },
          { path: 'desactivados', component: EstructurasDesactivadasComponent }
        ]
      },
      {
        path: 'tierras', children: [
          {
            path: 'usos', children: [
              { path: '', component: UsosTierrasComponent },
              {path:'desactivados',component:UsosTierrasDesactivadosComponent}
            ]
          },
          {
            path: 'tenencia', children: [
              { path: '', component: TenenciaTierrasComponent },
              {path:'desactivados',component:TenenciaTierrasDesactivadasComponent}
            ]
          }
        ]
      }

    ]
  },
  {
    path: 'ubicaciones', children: [
      { path: '', component: UbicacionesComponent },
      {
        path: 'departamentos', children: [
          { path: '', component: DepartamentosComponent },
        ]
      },
      {
        path: 'municipios', children: [
          { path: '', component: MunicipiosComponent },
        ]
      },
      {
        path: 'aldeas', children: [
          { path: '', component: AldeasComponent },
        ]
      },
      {
        path: 'caserios', children: [
          { path: '', component: CaseriosComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrarRoutingModule { }
