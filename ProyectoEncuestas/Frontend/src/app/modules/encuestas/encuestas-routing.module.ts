import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestasComponent } from './pages/encuestas/encuestas.component';
import { IndexEncuestasComponent } from './pages/index-encuestas.component';
import { ListadoEncuestasComponent } from './pages/listado-encuestas/listado-encuestas.component';
import { MisEncuestasComponent } from './pages/mis-encuestas/mis-encuestas.component';
import { TipoGuard } from '@guards/tipo.guard';
import { DocumentosComponent } from './pages/documentos/documentos.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: '', component: IndexEncuestasComponent,canActivate:[TipoGuard] },
      { path: 'listado', component: ListadoEncuestasComponent,canActivate:[TipoGuard] },
      { path: 'formato', component: EncuestasComponent },
      {path:'user',children:[
        {path:'',component:MisEncuestasComponent},
        {path:'documentos/:id',component:DocumentosComponent},
      ]}
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
