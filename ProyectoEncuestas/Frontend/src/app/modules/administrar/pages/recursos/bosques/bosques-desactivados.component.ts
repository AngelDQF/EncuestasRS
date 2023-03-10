import { Component } from '@angular/core';
import { Natural, NaturalesResponse, RecursosService }  from '@serv/recursos.service';


@Component({
  selector: 'app-bosques-desactivados',
  templateUrl: './bosques-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class BosquesDesactivadosComponent {
  bosques: Natural[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getBosquesDesactivados().subscribe((data: NaturalesResponse) => {
      this.bosques = data.results;
    })
  }
}
