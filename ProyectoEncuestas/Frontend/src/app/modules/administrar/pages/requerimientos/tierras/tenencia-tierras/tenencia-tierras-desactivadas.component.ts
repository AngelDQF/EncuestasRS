import { Component } from '@angular/core';
import { RequerimientosService, TenenciaTierra, TenenciaTierrasResponse } from '@serv/requerimientos.service';

@Component({
  selector: 'app-tenencia-tierras-desactivadas',
  templateUrl: './tenencia-tierras-desactivadas.component.html',
  styleUrls: ['../../requerimientos.component.css','../../../../../../app.component.css']
})
export class TenenciaTierrasDesactivadasComponent {
  page:any;
  tenencias: TenenciaTierra[] = [];
  constructor(private tenenciasTierraModel: RequerimientosService) {
    this.tenenciasTierraModel.getTenenciaTierrasDesactivados().subscribe((data: TenenciaTierrasResponse) => {
      this.tenencias = data.results;
    })
  }
}
