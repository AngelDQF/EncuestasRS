import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EncuestasRoutingModule } from './encuestas-routing.module';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { EncuestasService } from '@serv/encuestas.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListadoEncuestasComponent } from './pages/listado-encuestas/listado-encuestas.component';
import { IndexEncuestasComponent } from './pages/index-encuestas.component';
import { UbicacionesService } from '@serv/ubicaciones.service';

import { MatTableModule, } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [EncuestasComponent, ListadoEncuestasComponent, IndexEncuestasComponent],
  imports: [
    CommonModule,
    EncuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [
    EncuestasService,
    UbicacionesService
  ]
})
export class EncuestasModule { }
