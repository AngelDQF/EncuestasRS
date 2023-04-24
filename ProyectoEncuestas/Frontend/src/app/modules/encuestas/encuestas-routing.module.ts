import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { IndexEncuestasComponent } from './pages/index-encuestas.component';
import { ListadoEncuestasComponent } from './pages/listado-encuestas/listado-encuestas.component';
import { MisEncuestasComponent } from './pages/mis-encuestas/mis-encuestas.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: IndexEncuestasComponent },
      { path: 'listado', component: ListadoEncuestasComponent },
      { path: 'formato', component: EncuestasComponent },
      {path:'user',component:MisEncuestasComponent}
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class EncuestasRoutingModule { }
