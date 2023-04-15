import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsosTierraInterface } from '@models/administrar/requerimientos/usos-tierra.interface';
import { RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-usos-tierras',
  templateUrl: './usos-tierras.component.html',
  styleUrls: ['../../../../../cardLarge.css','../../../../../../app.component.css']
})
export class UsosTierrasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'uso', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService) { }
  ngOnInit(): void {
    this.obtenerUsos();
  }
  obtenerUsos() {
    this.reqModel.getUsosTierra().subscribe((data: UsosTierraInterface[]) => {
      this.dataSource = new MatTableDataSource<UsosTierraInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda = "";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
