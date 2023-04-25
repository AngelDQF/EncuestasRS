import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { EncuestasService } from '@serv/encuestas.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoEncuestasComponent } from './pages/listado-encuestas/listado-encuestas.component';
import { IndexEncuestasComponent } from './pages/index-encuestas.component';
import { UbicacionesService } from '@serv/ubicaciones.service';
import { MaterialExampleModule } from '@AM/*';
import { MisEncuestasComponent } from './pages/mis-encuestas/mis-encuestas.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
@NgModule({
  declarations: [EncuestasComponent, ListadoEncuestasComponent, IndexEncuestasComponent, MisEncuestasComponent, DocumentosComponent],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialExampleModule
  ],
  providers: [
    EncuestasService,
    UbicacionesService
  ]
})
export class EncuestasModule { }
