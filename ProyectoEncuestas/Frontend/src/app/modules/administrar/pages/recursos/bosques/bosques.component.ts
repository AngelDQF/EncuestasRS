import { Natural, NaturalesResponse, RecursosService }  from '@serv/recursos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bosques',
  templateUrl: './bosques.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class BosquesComponent {
  page:any;
  bosques: Natural[] = [];
  constructor(private bosquesModel: RecursosService) {
    this.bosquesModel.getBosques().subscribe((data: NaturalesResponse) => {
      this.bosques = data.results;
    })
  }
}
