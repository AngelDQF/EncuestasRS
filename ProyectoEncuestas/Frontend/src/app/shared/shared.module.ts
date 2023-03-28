import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JuntaService } from '@serv/junta.service';
import * as components from './components/index'
@NgModule({
  declarations: [
    NavbarComponent,
    IndexComponent,
    HeaderComponent,
    ...components.components
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
