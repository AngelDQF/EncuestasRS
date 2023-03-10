import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrarComponent } from './pages/administrar/administrar.component'

const routes: Routes = [
  { path: '', component: AdministrarComponent },
  {
    path: 'junta', loadChildren: () => import('@modules/junta/junta.module').then(m => m.JuntaModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrarRoutingModule { }
