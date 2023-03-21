import { Component } from '@angular/core';
import { FinanciamientosService, FuenteFinancimiento, FuentesFinancimientoResponse } from '@serv/financiamientos.service';

@Component({
  selector: 'app-fuentes-financiamientos-desactivadas',
  templateUrl: './fuentes-financiamientos-desactivadas.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class FuentesFinanciamientosDesactivadasComponent {
  page:any;
  financiamientos: FuenteFinancimiento[] = [];
  constructor(private financiamientoModel: FinanciamientosService) {
    this.financiamientoModel.getFuentesFinanciamientoDesactivados().subscribe((data: FuentesFinancimientoResponse) => {
      this.financiamientos = data.results;
    })
  }
}
