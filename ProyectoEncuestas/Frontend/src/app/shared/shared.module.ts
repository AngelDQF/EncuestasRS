import { UsuariosService } from '@serv/usuarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import * as components from './components/index';
import { MaterialExampleModule } from '@AM/*';
import { EncuestasService } from '@serv/encuestas.service';
import { AgregarFinanciamientoComponent } from './components/modals/financiamientos/agregar-financiamiento/agregar-financiamiento.component';
import { EstadoFinanciamientoComponent } from './components/modals/financiamientos/estado-financiamiento/estado-financiamiento.component';
import { AgregarRequerimientoComponent } from './components/modals/requerimientos/agregar-requerimiento/agregar-requerimiento.component';
import { EstadoRequerimientoComponent } from './components/modals/requerimientos/estado-requerimiento/estado-requerimiento.component';

@NgModule({
  declarations: [
    ...components.components,
    AgregarFinanciamientoComponent,
    EstadoFinanciamientoComponent,
    AgregarRequerimientoComponent,
    EstadoRequerimientoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialExampleModule,
  ],
  exports: [
    ...components.components
  ],
  providers: [
    JuntaService,
    EncuestasService,
    UsuariosService
  ],
})
export class SharedModule {
}
