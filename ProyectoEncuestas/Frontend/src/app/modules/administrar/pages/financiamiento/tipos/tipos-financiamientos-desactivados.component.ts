import { Component } from '@angular/core';
import { FinanciamientosService, TipoFinancimiento, TiposFinancimientoResponse } from 'src/app/services/financiamientos.service';

@Component({
  selector: 'app-tipos-financiamientos-desactivados',
  templateUrl: './tipos-financiamientos-desactivados.component.html',
  styleUrls: ['../../card.css','../../../../../app.component.css']
})
export class TiposFinanciamientosDesactivadosComponent {
  financiamientos: TipoFinancimiento[] = [];
  constructor(private financiamientoModel: FinanciamientosService) {
    this.financiamientoModel.getTiposFinanciamientoDesactivados().subscribe((data: TiposFinancimientoResponse) => {
      this.financiamientos = data.results;
    })
  }
}
