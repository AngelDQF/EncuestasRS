import { Component } from '@angular/core';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-caserios',
  templateUrl: './caserios.component.html',
  styleUrls: ['../ubicaciones.component.css','../../../../../app.component.css']
})
export class CaseriosComponent {
  caserios:any;
  constructor(private ubicacionesModel:UbicacionesService){
    this.ubicacionesModel.getCaserios().subscribe((response: CaseriosComponent[]) => {
      this.caserios = response;
    });
  }
}
