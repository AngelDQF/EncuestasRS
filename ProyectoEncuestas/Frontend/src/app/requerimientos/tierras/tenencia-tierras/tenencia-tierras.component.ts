import { Component } from '@angular/core';
import { RequerimientosService, TenenciaTierra, TenenciaTierrasResponse } from 'src/app/services/requerimientos.service';

@Component({
  selector: 'app-tenencia-tierras',
  templateUrl: './tenencia-tierras.component.html',
  styleUrls: ['../../requerimientos.component.css','../../../app.component.css']
})
export class TenenciaTierrasComponent {
  tenencias: TenenciaTierra[] = [];
  constructor(private tenenciasTierraModel: RequerimientosService) {
    this.tenenciasTierraModel.getTenenciaTierras().subscribe((data: TenenciaTierrasResponse) => {
      this.tenencias = data.results;
    })
  }
}
