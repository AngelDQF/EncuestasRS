import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MercadosInterface } from '@models/administrar/requerimientos/mercados.interface';
import { RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class MercadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'mercado', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService) { }
  ngOnInit(): void {
    this.obtenerMercados();
  }
  obtenerMercados() {
    this.reqModel.getMercados().subscribe((data: MercadosInterface[]) => {
      this.dataSource = new MatTableDataSource<MercadosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
