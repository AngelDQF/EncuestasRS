import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TenenciaTierraInterface } from '@models/administrar/requerimientos/tenencia.interface';
import { RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-tenencia-tierras',
  templateUrl: './tenencia-tierras.component.html',
  styleUrls: ['../../../../../cardLarge.css','../../../../../../app.component.css']
})
export class TenenciaTierrasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tenencia', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService) { }
  ngOnInit(): void {
    this.obtenerTenencia();
  }
  obtenerTenencia() {
    this.reqModel.getTenenciaTierras().subscribe((data: TenenciaTierraInterface[]) => {
      this.dataSource = new MatTableDataSource<TenenciaTierraInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda = "";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
