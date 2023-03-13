import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecuperarComponent } from './pages/recuperar/recuperar.component';

const routes: Routes = [
  {
    path: 'login', children: [
      { path: '', component: LoginComponent },
      { path: 'recuperar', component: RecuperarComponent }
    ]
  },
  { path: '**', redirectTo: '/auth/login' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
