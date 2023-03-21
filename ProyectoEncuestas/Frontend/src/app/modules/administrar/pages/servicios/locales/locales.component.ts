import { Component } from '@angular/core';
import { Servicio, ServiciosResponse, ServiciosService } from '@serv/servicios.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class LocalesComponent {
  page:any;
  servicios: Servicio[] = [];
  constructor(private serModel: ServiciosService) {
    this.serModel.getSerLocales().subscribe((data: ServiciosResponse) => {
      this.servicios = data.results;
    })
  }
}
