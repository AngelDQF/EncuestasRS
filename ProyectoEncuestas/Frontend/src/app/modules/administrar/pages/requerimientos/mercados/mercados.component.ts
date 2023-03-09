import { Component } from '@angular/core';
import { Mercado, MercadosResponse, RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.component.html',
  styleUrls: ['../requerimientos.component.css','../../../../../app.component.css']
})
export class MercadosComponent {
  mercados: Mercado[] = [];
  constructor(private financiamientoModel: RequerimientosService) {
    this.financiamientoModel.getMercados().subscribe((data: MercadosResponse) => {
      this.mercados = data.results;
    })
  }
}
