import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from '@shared/components/error/error.component';
import { IndexComponent } from '@shared/components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'administrar', loadChildren: () => import('@modules/administrar/administrar.module').then(m => m.AdministrarModule) },
  { path: 'usuarios', loadChildren: () => import('@modules/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: '**', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
