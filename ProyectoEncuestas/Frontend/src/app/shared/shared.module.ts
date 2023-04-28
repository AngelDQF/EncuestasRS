import { UsuariosService } from '@serv/usuarios.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import * as components from './components/index';
import { MaterialExampleModule } from '@AM/*';
import { EncuestasService } from '@serv/encuestas.service';
import { AgregarOrgComponent } from './components/modals/organizaciones/agregar-org/agregar-org.component';
import { EstadoOrgComponent } from './components/modals/organizaciones/estado-org/estado-org.component';
@NgModule({
  declarations: [
    ...components.components,
    AgregarOrgComponent,
    EstadoOrgComponent,
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
