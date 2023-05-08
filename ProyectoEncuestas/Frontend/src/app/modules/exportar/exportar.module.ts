import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExportarRoutingModule } from './exportar-routing.module';
import { ExportarComponent } from './exportar.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { DniComponent } from './pages/dni/dni.component';
import { ReferenciasService } from '@serv/referencias.service';
import { MaterialExampleModule } from '@AM/*';
import { SharedModule } from '@shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ExportarComponent, DocumentosComponent, DniComponent],
  imports: [
    CommonModule,
    ExportarRoutingModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MaterialExampleModule,
  ],
  providers: [
    ReferenciasService
  ]
})
export class ExportarModule { }
