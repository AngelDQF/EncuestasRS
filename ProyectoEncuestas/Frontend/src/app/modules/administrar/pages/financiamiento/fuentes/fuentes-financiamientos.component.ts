import { Component } from '@angular/core';
import { FinanciamientosService, FuenteFinancimiento, FuentesFinancimientoResponse } from '@serv/financiamientos.service';

@Component({
  selector: 'app-fuentes-financiamientos',
  templateUrl: './fuentes-financiamientos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class FuentesFinanciamientosComponent {
  financiamientos: FuenteFinancimiento[] = [];
  constructor(private financiamientoModel: FinanciamientosService) {
    this.financiamientoModel.getFuentesFinanciamiento().subscribe((data: FuentesFinancimientoResponse) => {
      this.financiamientos = data.results;
    })
  }
}
