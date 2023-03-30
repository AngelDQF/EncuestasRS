import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import * as components from './components/index';
import { DetalleOrgComponent } from './components/modals/encuestas/detalle-org/detalle-org.component'
@NgModule({
  declarations: [
    NavbarComponent,
    IndexComponent,
    HeaderComponent,
    ...components.components,
    DetalleOrgComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ...components.components
  ],
  providers:[
    JuntaService
  ]
})
export class SharedModule {
}
