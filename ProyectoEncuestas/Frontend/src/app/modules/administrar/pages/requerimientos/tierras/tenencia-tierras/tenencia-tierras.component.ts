import { Component } from '@angular/core';
import { RequerimientosService, TenenciaTierra, TenenciaTierrasResponse } from '@serv/requerimientos.service';

@Component({
  selector: 'app-tenencia-tierras',
  templateUrl: './tenencia-tierras.component.html',
  styleUrls: ['../../../../../cardLarge.css','../../../../../../app.component.css']
})
export class TenenciaTierrasComponent {
  page:any;
  tenencias: TenenciaTierra[] = [];
  constructor(private tenenciasTierraModel: RequerimientosService) {
    this.tenenciasTierraModel.getTenenciaTierras().subscribe((data: TenenciaTierrasResponse) => {
      this.tenencias = data.results;
    })
  }
}
