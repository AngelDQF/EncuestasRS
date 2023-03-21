import { Component } from '@angular/core';
import { RequerimientosService, UsoTierra,UsosTierraResponse } from '@serv/requerimientos.service';

@Component({
  selector: 'app-usos-tierras',
  templateUrl: './usos-tierras.component.html',
  styleUrls: ['../../requerimientos.component.css','../../../../../../app.component.css']
})
export class UsosTierrasComponent {
  page:any;
  usos: UsoTierra[] = [];
  constructor(private usosTierraModel: RequerimientosService) {
    this.usosTierraModel.getUsosTierra().subscribe((data: UsosTierraResponse) => {
      this.usos = data.results;
    })
  }
}
