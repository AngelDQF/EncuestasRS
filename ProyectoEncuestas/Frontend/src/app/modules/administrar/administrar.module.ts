import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrarRoutingModule } from './administrar-routing.module';
import { AdministrarComponent } from './pages/administrar/administrar.component';
import { FinanciamientosComponent } from './pages/financiamiento/financiamientos.component';
import { OrganizacionComponent } from './pages/organizaciones/organizacion.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { RequerimientosComponent } from './pages/requerimientos/requerimientos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';


@NgModule({
  declarations: [
    AdministrarComponent,
    FinanciamientosComponent,
    OrganizacionComponent,
    RecursosComponent,
    RequerimientosComponent,
    ServiciosComponent,
  ],
  imports: [
    CommonModule,
    AdministrarRoutingModule
  ]
})
export class AdministrarModule { }
