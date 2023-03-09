import { Component } from '@angular/core';
import { Servicio, ServiciosResponse, ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-locales-desactivados',
  templateUrl: './locales-desactivados.component.html',
  styleUrls: ['../../card.css','../../../../../app.component.css']
})
export class LocalesDesactivadosComponent {
  servicios: Servicio[] = [];
  constructor(private serModel: ServiciosService) {
    this.serModel.getSerBasicosDesactivados().subscribe((data: ServiciosResponse) => {
      this.servicios = data.results;
    })
  }
}
