import { Component } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';

@Component({
  selector: 'app-ejes-desactivados',
  templateUrl: './ejes.desactivados.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class EjesDesactivadosComponent {
  page:any;
  ejesDesactivados: Array<EjesInterface>;
  constructor(private ejesModel: JuntaService) {
    this.ejesModel.getEjesDesactivados().subscribe((data: EjesInterface[]) => {
      this.ejesDesactivados = data;
    })
  }
}
