import { Component, OnInit } from '@angular/core';
import { Cargo, CargosResponse, JuntaService } from '@serv/junta.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['../../../card.css', '../../../../app.component.css']
})
export class CargosComponent {
  cargos: Cargo[] = [];
  constructor(private cargosModel: JuntaService) {
    this.cargosModel.getCargos().subscribe((data: CargosResponse) => {
      this.cargos = data.results;
    })
  }
}
