import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosInterface } from '@models/administrar/servicios/servicios.interface';
import { ServiciosService } from '@serv/servicios.service';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class LocalesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'servicio', 'tipo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private serviciosModel: ServiciosService) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.serviciosModel.getSerBasicos().subscribe((data: ServiciosInterface[]) => {
      this.dataSource = new MatTableDataSource<ServiciosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
