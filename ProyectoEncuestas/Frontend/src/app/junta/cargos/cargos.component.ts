import { Component } from '@angular/core';
import { Cargo, CargosResponse, JuntaService } from 'src/app/services/junta.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css','../../app.component.css']
})
export class CargosComponent {
  cargos: Cargo[] = [];
  constructor(private cargosModel:JuntaService) {
    this.cargosModel.getCargos().subscribe((data: CargosResponse)=>{
      this.cargos = data.results;
      })
  }
}
