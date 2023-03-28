import { Component, OnInit } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';

@Component({
  selector: 'app-ejes-desactivados',
  templateUrl: './ejes.desactivados.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class EjesDesactivadosComponent implements OnInit {
  page:any;
  ejesDesactivados: Array<EjesInterface>;
  constructor(private ejesModel: JuntaService) {

  }
  ngOnInit(): void {
    this.obtenerEjes();
  }
  obtenerEjes(){
    this.ejesModel.getEjesDesactivados().subscribe((data: EjesInterface[]) => {
      this.ejesDesactivados = data;
    })
  }

  refresh(){
    this.obtenerEjes();
  }
}
