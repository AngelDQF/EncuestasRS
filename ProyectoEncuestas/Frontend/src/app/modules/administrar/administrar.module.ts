import { NgxPaginationModule } from 'ngx-pagination';
import { JuntaService } from './../../services/junta.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrarRoutingModule } from './administrar-routing.module';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { FinanciamientosComponent } from './pages/financiamiento/financiamientos.component';
import { OrganizacionComponent } from './pages/organizaciones/organizacion.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { RequerimientosComponent } from './pages/requerimientos/requerimientos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { OrganizacionesTiposComponent } from './pages/organizaciones/organizaciones-tipos/organizaciones-tipos.component';
import { OrganizacionesComponent } from './pages/organizaciones/organizaciones/organizaciones.component';
import { OrganizacionesDesactivadosComponent } from './pages/organizaciones/organizaciones/organizaciones-desactivados.component';
import { FuentesFinanciamientosComponent } from './pages/financiamiento/fuentes/fuentes-financiamientos.component';
import { FuentesFinanciamientosDesactivadasComponent } from './pages/financiamiento/fuentes/fuentes-financiamientos-desactivadas.component';
import { TiposFinanciamientosComponent } from './pages/financiamiento/tipos/tipos-financiamientos.component';
import { TiposFinanciamientosDesactivadosComponent } from './pages/financiamiento/tipos/tipos-financiamientos-desactivados.component';
import { JuntaComponent } from './pages/junta/junta.component';
import { CargosComponent } from './pages/junta/cargos/cargos.component';
import { CargosDesactivadosComponent } from './pages/junta/cargos/cargos-desactivados.component';
import { EjesComponent } from './pages/junta/ejes/ejes.component';
import { BasicosComponent } from './pages/servicios/basicos/basicos.component';
import { BasicosDesactivadosComponent } from './pages/servicios/basicos/basicos-desactivados.component';
import { LocalesComponent } from './pages/servicios/locales/locales.component';
import { LocalesDesactivadosComponent } from './pages/servicios/locales/locales-desactivados.component';
import { BosquesComponent } from './pages/recursos/bosques/bosques.component';
import { BosquesDesactivadosComponent } from './pages/recursos/bosques/bosques-desactivados.component';
import { TipoSueloDesactivadosComponent } from './pages/recursos/tipo-suelo/tipo-suelo-desactivados.component';
import { TipoSueloComponent } from './pages/recursos/tipo-suelo/tipo-suelo.component';
import { MercadosComponent } from './pages/requerimientos/mercados/mercados.component';
import { MercadosDesactivadosComponent } from './pages/requerimientos/mercados/mercados-desactivados.component';
import { UsosTierrasComponent } from './pages/requerimientos/tierras/usos-tierras/usos-tierras.component';
import { UsosTierrasDesactivadosComponent } from './pages/requerimientos/tierras/usos-tierras/usos-tierras-desactivados.component';
import { EstructurasComponent } from './pages/requerimientos/estructuras/estructuras.component';
import { EstructurasDesactivadasComponent } from './pages/requerimientos/estructuras/estructuras-desactivadas.component';
import { TenenciaTierrasComponent } from './pages/requerimientos/tierras/tenencia-tierras/tenencia-tierras.component';
import { TenenciaTierrasDesactivadasComponent } from './pages/requerimientos/tierras/tenencia-tierras/tenencia-tierras-desactivadas.component';
import { DepartamentosComponent } from './pages/ubicaciones/departamentos/departamentos.component';
import { MunicipiosComponent } from './pages/ubicaciones/municipios/municipios.component';
import { AldeasComponent } from './pages/ubicaciones/aldeas/aldeas.component';
import { CaseriosComponent } from './pages/ubicaciones/caserios/caserios.component';
import { UbicacionesService } from '@serv/ubicaciones.service';
import { UbicacionesComponent } from './pages/ubicaciones/ubicaciones.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { MatTableModule, } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { EscolaridadComponent } from './pages/junta/escolaridad/escolaridad.component';
import { EscolaridadDesactivadasComponent } from './pages/junta/escolaridad/escolaridad-desactivadas.component';
@NgModule({
  declarations: [
    AdministrarComponent,
    FinanciamientosComponent,
    FuentesFinanciamientosComponent,
    FuentesFinanciamientosDesactivadasComponent,
    TiposFinanciamientosComponent,
    TiposFinanciamientosDesactivadosComponent,
    JuntaComponent,
    CargosComponent,
    CargosDesactivadosComponent,
    EjesComponent,
    OrganizacionComponent,
    RecursosComponent,
    BosquesComponent,
    BosquesDesactivadosComponent,
    TipoSueloComponent,
    TipoSueloDesactivadosComponent,
    RequerimientosComponent,
    MercadosComponent,
    MercadosDesactivadosComponent,
    UsosTierrasComponent,
    UsosTierrasDesactivadosComponent,
    EstructurasComponent,
    EstructurasDesactivadasComponent,
    TenenciaTierrasComponent,
    TenenciaTierrasDesactivadasComponent,
    ServiciosComponent,
    BasicosComponent,
    BasicosDesactivadosComponent,
    LocalesComponent,
    LocalesDesactivadosComponent,
    OrganizacionesTiposComponent,
    OrganizacionesComponent,
    OrganizacionesDesactivadosComponent,
    DepartamentosComponent,
    UbicacionesComponent,
    MunicipiosComponent,
    AldeasComponent,
    CaseriosComponent,
    EscolaridadComponent,
    EscolaridadDesactivadasComponent,

  ],
  imports: [
    CommonModule,
    AdministrarRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatNativeDateModule
  ],
  providers: [JuntaService, UbicacionesService
  ]
})
export class AdministrarModule { }
