import { Component } from '@angular/core';
import { Cargo, CargosResponse, JuntaService } from 'src/app/services/junta.service';

@Component({
  selector: 'app-cargos-desactivados',
  templateUrl: './cargos-desactivados.component.html',
  styleUrls: ['./cargos.component.css','../../app.component.css']
})
export class CargosDesactivadosComponent {
  cargosDesactivados: Cargo[] = [];
  constructor(private cargosModel:JuntaService) {
    this.cargosModel.getCargosDesactivados().subscribe((data: CargosResponse)=>{
      this.cargosDesactivados = data.results;
      })
  }
}
