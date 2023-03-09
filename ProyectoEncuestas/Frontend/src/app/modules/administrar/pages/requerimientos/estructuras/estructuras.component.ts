import { Component } from '@angular/core';
import { Estructura, EstructurasResponse, RequerimientosService } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['../requerimientos.component.css','../../../../../app.component.css']
})
export class EstructurasComponent {
  estructuras: Estructura[] = [];
  constructor(private financiamientoModel: RequerimientosService) {
    this.financiamientoModel.getEstructuras().subscribe((data: EstructurasResponse) => {
      this.estructuras = data.results;
    })
  }
}
