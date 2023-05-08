import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportarComponent } from './exportar.component';
import { DocumentosComponent } from './pages/documentos/documentos.component';
import { DniComponent } from './pages/dni/dni.component';

const routes: Routes = [
  {path: '', component:ExportarComponent},
  {path: 'actas', component:DocumentosComponent},
  {path: 'dni', component:DniComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportarRoutingModule { }
