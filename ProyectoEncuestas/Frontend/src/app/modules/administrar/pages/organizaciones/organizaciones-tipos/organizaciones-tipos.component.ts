import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';
import { OrganizacionesService } from '@serv/organizaciones.service';

@Component({
  selector: 'app-organizaciones-tipos',
  templateUrl: './organizaciones-tipos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class OrganizacionesTiposComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tipo'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orgModel: OrganizacionesService) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.orgModel.getTiposOrganizacion().subscribe((data: TiposOrgInterface[]) => {
      this.dataSource = new MatTableDataSource<TiposOrgInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
