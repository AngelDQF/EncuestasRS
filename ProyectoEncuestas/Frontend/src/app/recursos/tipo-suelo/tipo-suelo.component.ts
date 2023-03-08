import { Component } from '@angular/core';
import { Natural, NaturalesResponse, RecursosService } from './../../services/recursos.service';

@Component({
  selector: 'app-tipo-suelo',
  templateUrl: './tipo-suelo.component.html',
  styleUrls: ['../recursos.component.css','../../app.component.css']
})
export class TipoSueloComponent {
  suelos: Natural[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getBosques().subscribe((data: NaturalesResponse) => {
      this.suelos = data.results;
    })
  }
}
