import { Component } from '@angular/core';
import { Natural, NaturalesResponse, RecursosService } from '@serv/recursos.service';

@Component({
  selector: 'app-tipo-suelo-desactivados',
  templateUrl: './tipo-suelo-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TipoSueloDesactivadosComponent {
  page:any;
  suelos: Natural[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getSuelosDesactivados().subscribe((data: NaturalesResponse) => {
      this.suelos = data.results;
    })
  }
}
