import { Component } from '@angular/core';
import { Estructura, EstructurasResponse, RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-estructuras-desactivadas',
  templateUrl: './estructuras-desactivadas.component.html',
  styleUrls: ['../requerimientos.component.css','../../../../../app.component.css']
})
export class EstructurasDesactivadasComponent {
  estructuras: Estructura[] = [];
  constructor(private financiamientoModel: RequerimientosService) {
    this.financiamientoModel.getEstructurasDesactivados().subscribe((data: EstructurasResponse) => {
      this.estructuras = data.results;
    })
  }
}
