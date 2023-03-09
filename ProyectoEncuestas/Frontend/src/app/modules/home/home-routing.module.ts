import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '@shared/components/index/index.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'administrar',loadChildren:()=>import('@modules/administrar/administrar.module').then(m=>m.AdministrarModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
