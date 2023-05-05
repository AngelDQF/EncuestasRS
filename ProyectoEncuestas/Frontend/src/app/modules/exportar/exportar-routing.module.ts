import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExportarComponent } from './exportar.component';

const routes: Routes = [
  {path: '', component:ExportarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExportarRoutingModule { }
