import { Natural, NaturalesResponse, RecursosService } from './../../services/recursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bosques',
  templateUrl: './bosques.component.html',
  styleUrls: ['../recursos.component.css','../../app.component.css']
})
export class BosquesComponent {
  bosques: Natural[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getBosques().subscribe((data: NaturalesResponse) => {
      this.bosques = data.results;
    })
  }
}
