import { Component } from '@angular/core';
import { Eje, EjesResponse, JuntaService } from 'src/app/services/junta.service';

@Component({
  selector: 'app-ejes',
  templateUrl: './ejes.component.html',
  styleUrls: ['../../card.css','../../../../../app.component.css']
})
export class EjesComponent {
  ejes: Eje[] = [];
  constructor(private ejesModel:JuntaService) {
    this.ejesModel.getEjes().subscribe((data: EjesResponse)=>{
      this.ejes = data.results;
      })
  }
}
