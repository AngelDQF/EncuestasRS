import { Component } from '@angular/core';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-aldeas',
  templateUrl: './aldeas.component.html',
  styleUrls: ['../ubicaciones.component.css','../../../../../app.component.css']
})
export class AldeasComponent {
  aldeas:any;
  page:any;
  constructor(private ubicacionesModel:UbicacionesService){
    this.ubicacionesModel.getAldeas().subscribe((response: AldeasComponent[]) => {
      this.aldeas = response;
    });
  }
}
