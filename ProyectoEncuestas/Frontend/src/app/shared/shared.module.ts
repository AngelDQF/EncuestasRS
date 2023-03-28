import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalExitoComponent } from './components/modals/modal-exito/modal-exito.component';
import { ModalEjesComponent } from './components/modals/modal-ejes/modal-ejes.component';
import { JuntaService } from '@serv/junta.service';

@NgModule({
  declarations: [
    NavbarComponent,
    IndexComponent,
    HeaderComponent,
    ModalExitoComponent,
    ModalEjesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    IndexComponent,
    ModalExitoComponent,
    ModalEjesComponent,
    HeaderComponent,
  ],
  providers:[
    JuntaService
  ]
})
export class SharedModule {
}
