import { Component } from '@angular/core';
import { FinanciamientosService, TipoFinancimiento, TiposFinancimientoResponse } from '@serv/financiamientos.service';

@Component({
  selector: 'app-tipos-financiamientos-desactivados',
  templateUrl: './tipos-financiamientos-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TiposFinanciamientosDesactivadosComponent {
  page:any;
  financiamientos: TipoFinancimiento[] = [];
  constructor(private financiamientoModel: FinanciamientosService) {
    this.financiamientoModel.getTiposFinanciamientoDesactivados().subscribe((data: TiposFinancimientoResponse) => {
      this.financiamientos = data.results;
    })
  }
}
