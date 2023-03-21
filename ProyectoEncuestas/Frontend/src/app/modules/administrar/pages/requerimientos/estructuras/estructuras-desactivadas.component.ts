import { Component } from '@angular/core';
import { Estructura, EstructurasResponse, RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-estructuras-desactivadas',
  templateUrl: './estructuras-desactivadas.component.html',
  styleUrls: ['../requerimientos.component.css','../../../../../app.component.css']
})
export class EstructurasDesactivadasComponent {
  page:any;
  estructuras: Estructura[] = [];
  constructor(private financiamientoModel: RequerimientosService) {
    this.financiamientoModel.getEstructurasDesactivados().subscribe((data: EstructurasResponse) => {
      this.estructuras = data.results;
    })
  }
}
