import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargosDesactivadosComponent } from './page/cargos/cargos-desactivados.component';
import { CargosComponent } from './page/cargos/cargos.component';
import { JuntaComponent } from './page/junta.component';

const routes: Routes = [
  { path: '', component: JuntaComponent },
  {
    path: 'cargos', children: [
      { path: '', component: CargosComponent },
      {
        path: 'desactivados', component: CargosDesactivadosComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuntaRoutingModule { }
