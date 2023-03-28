import { Component, OnInit } from '@angular/core';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { JuntaService } from '@serv/junta.service';
@Component({
  selector: 'app-cargos-desactivados',
  templateUrl: './cargos-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class CargosDesactivadosComponent implements OnInit {
  page:any;
  cargosDesactivados:any;
  constructor(private cargosModel:JuntaService) {}
  ngOnInit(): void {
    this.obtenerCargos();
  }
  obtenerCargos(){
    this.cargosModel.getCargosDesactivados().subscribe((data: EjesInterface[])=>{
      this.cargosDesactivados = data;
      })
  }
  refresh(){
    this.obtenerCargos();
  }
}
