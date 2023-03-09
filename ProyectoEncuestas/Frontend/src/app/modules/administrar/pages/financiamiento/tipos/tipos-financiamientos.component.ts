import { Component } from '@angular/core';
import { FinanciamientosService, TipoFinancimiento, TiposFinancimientoResponse } from '@serv/financiamientos.service';

@Component({
  selector: 'app-tipos-financiamientos',
  templateUrl: './tipos-financiamientos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']

})
export class TiposFinanciamientosComponent {
  financiamientos: TipoFinancimiento[] = [];
  constructor(private financiamientoModel: FinanciamientosService) {
    this.financiamientoModel.getTiposFinanciamientoDesactivados().subscribe((data: TiposFinancimientoResponse) => {
      this.financiamientos = data.results;
    })
  }
}
