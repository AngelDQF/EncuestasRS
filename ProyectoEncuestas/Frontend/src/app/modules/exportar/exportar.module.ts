import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportarRoutingModule } from './exportar-routing.module';
import { ExportarComponent } from './exportar.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';


@NgModule({
  declarations: [ExportarComponent, DocumentosComponent],
  imports: [
    CommonModule,
    ExportarRoutingModule
  ]
})
export class ExportarModule { }
