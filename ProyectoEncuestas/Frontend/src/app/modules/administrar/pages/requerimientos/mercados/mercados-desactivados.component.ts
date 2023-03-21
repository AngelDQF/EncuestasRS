import { Component } from '@angular/core';
import { Mercado, MercadosResponse, RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-mercados-desactivados',
  templateUrl: './mercados-desactivados.component.html',
  styleUrls: ['../requerimientos.component.css','../../../../../app.component.css']
})
export class MercadosDesactivadosComponent {
  page:any;
  mercados: Mercado[] = [];
  constructor(private financiamientoModel: RequerimientosService) {
    this.financiamientoModel.getMercadosDesactivados().subscribe((data: MercadosResponse) => {
      this.mercados = data.results;
    })
  }
}
