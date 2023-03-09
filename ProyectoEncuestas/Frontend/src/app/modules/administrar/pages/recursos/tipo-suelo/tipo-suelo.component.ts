import { Component } from '@angular/core';
import { Natural, NaturalesResponse, RecursosService } from '@serv/recursos.service';

@Component({
  selector: 'app-tipo-suelo',
  templateUrl: './tipo-suelo.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TipoSueloComponent {
  suelos: Natural[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getSuelos().subscribe((data: NaturalesResponse) => {
      this.suelos = data.results;
    })
  }
}
