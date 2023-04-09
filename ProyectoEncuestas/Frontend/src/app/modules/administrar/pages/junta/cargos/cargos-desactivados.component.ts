import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CargosInterface } from '@models/administrar/junta/cargos.interface';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { JuntaService } from '@serv/junta.service';
@Component({
  selector: 'app-cargos-desactivados',
  templateUrl: './cargos-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class CargosDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'cargo', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private cargosModel: JuntaService) { }
  ngOnInit(): void {
    this.obtenerCargos();
  }
  refresh(){
    this.obtenerCargos();
  }
  obtenerCargos(){
    this.cargosModel.getCargosDesactivados().subscribe((data: CargosInterface[]) => {
      this.dataSource = new MatTableDataSource<CargosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
