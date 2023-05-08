import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportarComponent } from './exportar.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';

const routes: Routes = [
  {path: '', component:ExportarComponent},
  {path: 'documentos', component:DocumentosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportarRoutingModule { }
