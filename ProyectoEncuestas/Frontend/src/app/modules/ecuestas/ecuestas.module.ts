import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcuestasRoutingModule } from './ecuestas-routing.module';
import { EncuestasComponent } from './encuestas/encuestas.component';


@NgModule({
  declarations: [EncuestasComponent],
  imports: [
    CommonModule,
    EcuestasRoutingModule
  ]
})
export class EcuestasModule { }
