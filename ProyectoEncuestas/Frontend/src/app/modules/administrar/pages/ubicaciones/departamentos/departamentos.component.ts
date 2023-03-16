import { Component } from '@angular/core';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['../ubicaciones.component.css','../../../../../app.component.css']
})
export class DepartamentosComponent {
  departamentos:any;
  constructor(private ubicacionesModel: UbicacionesService) {
    this.ubicacionesModel.getDepartamentos().subscribe((response: DepartamentosInterface[]) => {
      this.departamentos = response;
    })
  }
}
