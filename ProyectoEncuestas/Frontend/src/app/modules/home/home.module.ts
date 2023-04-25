import { EncuestasService } from '@serv/encuestas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MaterialExampleModule } from '@AM/*';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,MaterialExampleModule,
    SharedModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [
    EncuestasService
  ],

})
export class HomeModule { }
