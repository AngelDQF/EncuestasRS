import { Component, OnInit, ViewChild } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { MatPaginator } from '@angular/material/paginator';
import { CargosInterface } from '@models/administrar/junta/cargos.interface';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class CargosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'cargo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private cargosModel: JuntaService) { }
  ngOnInit(): void {
    this.obtenerCargos();
  }
  obtenerCargos(){
    this.cargosModel.getCargos().subscribe((data: CargosInterface[]) => {
      this.dataSource = new MatTableDataSource<CargosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
