import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    NavbarComponent,
    IndexComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    IndexComponent,
    HeaderComponent,
  ]
})
export class SharedModule {
}
