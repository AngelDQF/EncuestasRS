import { Component } from '@angular/core';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { MunicipiosInterface } from '@models/ubicaciones/municipios.interface.ts';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['../ubicaciones.component.css','../../../../../app.component.css']
})
export class MunicipiosComponent {
  municipios:any;
  departamentos:any;
  constructor(private ubicacionesModel: UbicacionesService) {
    this.ubicacionesModel.getDepartamentos().subscribe((result:DepartamentosInterface[])=>{
      this.departamentos=result
    });
    this.ubicacionesModel.getMunicipios().subscribe((response: MunicipiosInterface[]) => {
      this.municipios = response;
    });
  }
}
