import { Component } from '@angular/core';
import { Mercado, MercadosResponse, RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.component.html',
  styleUrls: ['../requerimientos.component.css','../../../../../app.component.css']
})
export class MercadosComponent {
  page:any;
  mercados: Mercado[] = [];
  constructor(private financiamientoModel: RequerimientosService) {
    this.financiamientoModel.getMercados().subscribe((data: MercadosResponse) => {
      this.mercados = data.results;
    })
  }
}
