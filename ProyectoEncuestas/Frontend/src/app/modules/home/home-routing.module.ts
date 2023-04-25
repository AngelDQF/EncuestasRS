import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoGuard } from '@guards/tipo.guard';
import { ErrorComponent } from '@shared/components/error/error.component';
import { IndexComponent } from '@shared/components/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'usuarios', loadChildren: () => import('@modules/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: 'administrar', loadChildren: () => import('@modules/administrar/administrar.module').then(m => m.AdministrarModule),canActivate:[TipoGuard] },
  { path: 'encuestas', loadChildren: () => import('@modules/encuestas/encuestas.module').then(m => m.EncuestasModule) },

  { path: '**', component: ErrorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
