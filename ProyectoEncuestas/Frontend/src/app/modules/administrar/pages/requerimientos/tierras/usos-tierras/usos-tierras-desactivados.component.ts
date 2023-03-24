import { Component } from '@angular/core';
import { RequerimientosService, UsoTierra, UsosTierraResponse } from '@serv/requerimientos.service';

@Component({
  selector: 'app-usos-tierras-desactivados',
  templateUrl: './usos-tierras-desactivados.component.html',
  styleUrls: ['../../../../../cardLarge.css', '../../../../../../app.component.css']
})
export class UsosTierrasDesactivadosComponent {
  page: any;
  usos: UsoTierra[] = [];
  constructor(private usosTierraModel: RequerimientosService) {
    this.usosTierraModel.getUsosTierraDesactivados().subscribe((data: UsosTierraResponse) => {
      this.usos = data.results;
    })
  }
}
