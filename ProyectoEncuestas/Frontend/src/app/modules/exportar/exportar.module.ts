import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportarRoutingModule } from './exportar-routing.module';
import { ExportarComponent } from './exportar.component';


@NgModule({
  declarations: [ExportarComponent],
  imports: [
    CommonModule,
    ExportarRoutingModule
  ]
})
export class ExportarModule { }
