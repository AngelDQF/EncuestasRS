import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@guards/session.guard';
import { HomeComponent } from '@modules/home/home/home.component';
const routes: Routes = [
  { path: 'auth', loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '', component: HomeComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
    canActivate:[SessionGuard]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
export const routingComponents = [IndexComponent, UsuariosComponent, LoginComponent, EncuestasComponent, NavbarComponent];*/
