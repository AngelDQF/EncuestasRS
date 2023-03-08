import { Component } from '@angular/core';
import { FinanciamientosService, FuenteFinancimiento, FuentesFinancimientoResponse } from 'src/app/services/financiamientos.service';

@Component({
  selector: 'app-fuentes-financiamientos-desactivadas',
  templateUrl: './fuentes-financiamientos-desactivadas.component.html',
  styleUrls: ['../financiamientos.component.css','../../app.component.css']
})
export class FuentesFinanciamientosDesactivadasComponent {
  financiamientos: FuenteFinancimiento[] = [];
  constructor(private financiamientoModel: FinanciamientosService) {
    this.financiamientoModel.getFuentesFinanciamientoDesactivados().subscribe((data: FuentesFinancimientoResponse) => {
      this.financiamientos = data.results;
    })
  }
}
