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
import { EstadoServicioComponent } from './components/modals/servicios/estado-servicio/estado-servicio.component';
import { EstadoBosqueComponent } from './components/modals/naturales/estado-bosque/estado-bosque.component';
import { AgregarBosqueComponent } from './components/modals/naturales/agregar-bosque/agregar-bosque.component';
import { AgregarFuenteComponent } from './components/modals/financiamientos/agregar-fuente/agregar-fuente.component';
import { AgregarTipoComponent } from './components/modals/financiamientos/agregar-tipo/agregar-tipo.component';
import { EstadoTipoComponent } from './components/modals/financiamientos/estado-tipo/estado-tipo.component';
import { EstadoFuenteComponent } from './components/modals/financiamientos/estado-fuente/estado-fuente.component';
import { AgregarSueloComponent } from './components/modals/naturales/agregar-suelo/agregar-suelo.component';
import { EstadoSueloComponent } from './components/modals/naturales/estado-suelo/estado-suelo.component';
import { AgregarMercadoComponent } from './components/modals/requerimientos/mercados/agregar-mercado/agregar-mercado.component';
import { EstadoMercadoComponent } from './components/modals/requerimientos/mercados/estado-mercado/estado-mercado.component';
import { EstadoUsosTierraComponent } from './components/modals/requerimientos/usos-tierra/estado-usos-tierra/estado-usos-tierra.component';
import { AgregarUsosTierraComponent } from './components/modals/requerimientos/usos-tierra/agregar-usos-tierra/agregar-usos-tierra.component';
import { EstadoEstructuraComponent } from './components/modals/requerimientos/estructuras/estado-estructura/estado-estructura.component';
import { AgregarEstructuraComponent } from './components/modals/requerimientos/estructuras/agregar-estructura/agregar-estructura.component';
import { AgregarTenenciaTierraComponent } from './components/modals/requerimientos/tenencia-tierra/agregar-tenencia-tierra/agregar-tenencia-tierra.component';
import { EstadoTenenciaTierraComponent } from './components/modals/requerimientos/tenencia-tierra/estado-tenencia-tierra/estado-tenencia-tierra.component';
@NgModule({
  declarations: [
    ...components.components,
    AgregarOrgComponent,
    EstadoOrgComponent,
    EstadoServicioComponent,
    EstadoBosqueComponent,
    AgregarBosqueComponent,
    AgregarFuenteComponent,
    AgregarTipoComponent,
    EstadoTipoComponent,
    EstadoFuenteComponent,
    AgregarSueloComponent,
    EstadoSueloComponent,
    AgregarMercadoComponent,
    EstadoMercadoComponent,
    EstadoUsosTierraComponent,
    AgregarUsosTierraComponent,
    EstadoEstructuraComponent,
    AgregarEstructuraComponent,
    AgregarTenenciaTierraComponent,
    EstadoTenenciaTierraComponent,
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
