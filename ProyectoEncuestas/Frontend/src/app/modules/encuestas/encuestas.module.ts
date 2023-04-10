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
@NgModule({
  declarations: [EncuestasComponent, ListadoEncuestasComponent, IndexEncuestasComponent],
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
