import { Component } from '@angular/core';
import { Servicio, ServiciosResponse, ServiciosService } from '@serv/servicios.service';

@Component({
  selector: 'app-basicos-desactivados',
  templateUrl: './basicos-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class BasicosDesactivadosComponent {
  servicios: Servicio[] = [];
  constructor(private serModel: ServiciosService) {
    this.serModel.getSerBasicosDesactivados().subscribe((data: ServiciosResponse) => {
      this.servicios = data.results;
    })
  }
}
