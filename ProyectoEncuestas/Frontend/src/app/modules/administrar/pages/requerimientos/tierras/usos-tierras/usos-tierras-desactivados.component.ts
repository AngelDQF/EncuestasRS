import { Component } from '@angular/core';
import { RequerimientosService, UsoTierra,UsosTierraResponse } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-usos-tierras-desactivados',
  templateUrl: './usos-tierras-desactivados.component.html',
  styleUrls: ['../../requerimientos.component.css','../../../../../../app.component.css']
})
export class UsosTierrasDesactivadosComponent {
  usos: UsoTierra[] = [];
  constructor(private usosTierraModel: RequerimientosService) {
    this.usosTierraModel.getUsosTierraDesactivados().subscribe((data: UsosTierraResponse) => {
      this.usos = data.results;
    })
  }
}
