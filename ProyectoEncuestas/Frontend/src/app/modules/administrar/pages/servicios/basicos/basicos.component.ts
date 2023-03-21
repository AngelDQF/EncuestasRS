import { Component } from '@angular/core';
import { Servicio, ServiciosResponse, ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class BasicosComponent {
  page:any;
  servicios: Servicio[] = [];
  constructor(private serModel: ServiciosService) {
    this.serModel.getSerBasicos().subscribe((data: ServiciosResponse) => {
      this.servicios = data.results;
    })
  }
}
