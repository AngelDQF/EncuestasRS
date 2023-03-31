import { Component } from '@angular/core';
import { Encuesta, EncuestasResponse, EncuestasService,  } from '@serv/encuestas.service';
@Component({
  selector: 'app-listado-encuestas',
  templateUrl: './listado-encuestas.component.html',
  styleUrls: ['./listado-encuestas.component.css','../../../../app.component.css','../../../card.css']
})
export class ListadoEncuestasComponent {
  encuestas: Encuesta[] = [];
  constructor(private encuestasModel:EncuestasService) {
    this.refresh();
  }
  refresh(){
    this.encuestasModel.getEncuestas().subscribe((data: EncuestasResponse)=>{
      this.encuestas = data.results;
      })
  }
}
