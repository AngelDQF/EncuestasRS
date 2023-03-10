import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarComponent } from './pages/administrar/administrar.component'
import { FinanciamientosComponent } from './pages/financiamiento/financiamientos.component';
import { JuntaComponent } from './pages/junta/junta.component';
import { OrganizacionComponent } from './pages/organizaciones/organizacion.component';
import { OrganizacionesTiposDesactivadosComponent } from './pages/organizaciones/organizaciones-tipos/organizaciones-tipos-desactivados.component';
import { OrganizacionesTiposComponent } from './pages/organizaciones/organizaciones-tipos/organizaciones-tipos.component';
import { OrganizacionesDesactivadosComponent } from './pages/organizaciones/organizaciones/organizaciones-desactivados.component';
import { OrganizacionesComponent } from './pages/organizaciones/organizaciones/organizaciones.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { RequerimientosComponent } from './pages/requerimientos/requerimientos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  { path: '', component: AdministrarComponent },
  {
    path: 'junta', component:JuntaComponent
  },
  {
    path: 'org', children:[
      {path:'',component:OrganizacionComponent},
      {path:'organizaciones',children:[
        {path:'',component:OrganizacionesComponent},
        {path:'desactivados',component:OrganizacionesDesactivadosComponent}
      ]},
      {path:'tipos',children:[
        {path:'',component:OrganizacionesTiposComponent},
        {path:'descativado',component:OrganizacionesTiposDesactivadosComponent}
      ]}

    ]
  },
  {
    path: 'servicios', component:ServiciosComponent
  },
  {
    path: 'rn', component:RecursosComponent
  },
  {
    path: 'financiamientos', component:FinanciamientosComponent
  },
  {
    path: 'requerimientos', component:RequerimientosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrarRoutingModule { }
