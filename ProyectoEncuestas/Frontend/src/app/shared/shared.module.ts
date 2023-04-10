import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import * as components from './components/index';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatNativeDateModule} from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CerrarSesionComponent } from './components/index';
@NgModule({
  declarations: [
    ...components.components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatGridListModule,
    MatNativeDateModule,
    MatFormFieldModule
  ],
  entryComponents: [
   CerrarSesionComponent
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
