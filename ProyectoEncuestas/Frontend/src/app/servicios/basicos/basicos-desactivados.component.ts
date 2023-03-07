import { Component } from '@angular/core';
import { Servicio, ServiciosResponse, ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-basicos-desactivados',
  templateUrl: './basicos-desactivados.component.html',
  styleUrls: ['../servicios.component.css','../../app.component.css']
})
export class BasicosDesactivadosComponent {
  servicios: Servicio[] = [];
  constructor(private serModel: ServiciosService) {
    this.serModel.getSerBasicosDesactivados().subscribe((data: ServiciosResponse) => {
      this.servicios = data.results;
    })
  }
}
