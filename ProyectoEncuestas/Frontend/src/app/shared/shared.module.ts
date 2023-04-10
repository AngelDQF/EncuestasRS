import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import * as components from './components/index';
import { MaterialExampleModule } from '@AM/*';
import { DesactivarUserComponent } from './components/modals/desactivar-user/desactivar-user.component';
import { RestablecerPasswordComponent } from './components/modals/restablecer-password/restablecer-password.component';
@NgModule({
  declarations: [
    ...components.components,
    DesactivarUserComponent,
    RestablecerPasswordComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialExampleModule
  ],
  exports: [
    ...components.components
  ],
  providers: [
    JuntaService
  ],
})
export class SharedModule {
}
