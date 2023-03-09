import { Component } from '@angular/core';
import { Eje, EjesResponse, JuntaService } from 'src/app/services/junta.service';

@Component({
  selector: 'app-ejes-desactivados',
  templateUrl: './ejes.desactivados.html',
  styleUrls: ['../../card.css','../../../../../app.component.css']
})
export class EjesDesactivadosComponent {
  ejesDesactivados: Eje[] = [];
  constructor(private ejesModel:JuntaService) {
    this.ejesModel.getEjesDesactivados().subscribe((data: EjesResponse)=>{
      this.ejesDesactivados = data.results;
      })
  }
}
