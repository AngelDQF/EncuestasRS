import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '@shared/components/navbar/navbar.component';
import { HeaderComponent } from '@shared/components/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
