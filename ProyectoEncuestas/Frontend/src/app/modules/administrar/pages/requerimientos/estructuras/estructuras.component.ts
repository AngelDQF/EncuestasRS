import { Component } from '@angular/core';
import { Estructura, EstructurasResponse, RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class EstructurasComponent {
  page:any;
  estructuras: Estructura[] = [];
  constructor(private financiamientoModel: RequerimientosService) {
    this.financiamientoModel.getEstructuras().subscribe((data: EstructurasResponse) => {
      this.estructuras = data.results;
    })
  }
}
