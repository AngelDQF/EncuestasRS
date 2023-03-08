import { Component } from '@angular/core';
import { Natural, NaturalesResponse, RecursosService } from './../../services/recursos.service';

@Component({
  selector: 'app-tipo-suelo-desactivados',
  templateUrl: './tipo-suelo-desactivados.component.html',
  styleUrls: ['../recursos.component.css','../../app.component.css']
})
export class TipoSueloDesactivadosComponent {
  suelos: Natural[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getBosques().subscribe((data: NaturalesResponse) => {
      this.suelos = data.results;
    })
  }
}
