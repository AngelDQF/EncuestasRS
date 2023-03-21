import { Component } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
@Component({
  selector: 'app-ejes',
  templateUrl: './ejes.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class EjesComponent {
  page:any;
  ejes:Array<EjesInterface>=[];
  constructor(private ejesModel:JuntaService) {
    this.ejesModel.getEjes().subscribe((data: EjesInterface[])=>{
      this.ejes = data;
      })
  }
}
