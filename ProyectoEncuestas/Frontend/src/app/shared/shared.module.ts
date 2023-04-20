import { UsuariosService } from '@serv/usuarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import * as components from './components/index';
import { MaterialExampleModule } from '@AM/*';
import { DesactivarUserComponent } from './components/modals/desactivar-user/desactivar-user.component';
import { AgregarAsignacionComponent } from './components/modals/agregar-asignacion/agregar-asignacion.component';
import { EncuestasService } from '@serv/encuestas.service';
import { CambiarEstadoComponent } from './components/modals/cambiar-estado/cambiar-estado.component';
@NgModule({
  declarations: [
    ...components.components,
    DesactivarUserComponent,
    AgregarAsignacionComponent,
    CambiarEstadoComponent,
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
    JuntaService,
    EncuestasService,
    UsuariosService
  ],
})
export class SharedModule {
}
