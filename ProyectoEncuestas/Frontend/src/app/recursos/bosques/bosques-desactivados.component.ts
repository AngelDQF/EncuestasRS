import { Component } from '@angular/core';
import { Bosque, BosquesResponse, RecursosService } from './../../services/recursos.service';

@Component({
  selector: 'app-bosques-desactivados',
  templateUrl: './bosques-desactivados.component.html',
  styleUrls: ['../recursos.component.css','../../app.component.css']
})
export class BosquesDesactivadosComponent {
  bosques: Bosque[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getBosques().subscribe((data: BosquesResponse) => {
      this.bosques = data.results;
    })
  }
}
