import { Component, OnInit } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class CargosComponent implements OnInit {
  page:any;
  cargos:any;
  constructor(private cargosModel: JuntaService) {
    this.cargosModel.getCargos().subscribe((response: EjesInterface[]) => {
      this.cargos = response;
    })
  }
  ngOnInit(): void {}
}
