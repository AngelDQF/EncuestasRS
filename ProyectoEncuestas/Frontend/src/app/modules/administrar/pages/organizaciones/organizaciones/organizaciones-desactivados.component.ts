import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { OrganizacionesService, } from '@serv/organizaciones.service';

@Component({
  selector: 'app-organizaciones-desactivados',
  templateUrl: './organizaciones-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class OrganizacionesDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'org', 'tipo', 'social','estado'];
  dataSource: any;
  txtBusqueda:string="";
  true:string = "true";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orgModel: OrganizacionesService) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.orgModel.getOrganizacionesDesactivados().subscribe((data: OrganizacionesInterface[]) => {
      this.dataSource = new MatTableDataSource<OrganizacionesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
