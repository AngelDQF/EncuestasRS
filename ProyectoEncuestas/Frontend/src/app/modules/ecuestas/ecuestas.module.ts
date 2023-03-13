import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcuestasRoutingModule } from './ecuestas-routing.module';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EncuestasService } from '@serv/encuestas.service';


@NgModule({
  declarations: [EncuestasComponent],
  imports: [
    CommonModule,
    EcuestasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    EncuestasService
  ]
})
export class EcuestasModule { }
