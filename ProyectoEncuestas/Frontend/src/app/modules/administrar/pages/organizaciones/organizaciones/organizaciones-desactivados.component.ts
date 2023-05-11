import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { OrganizacionesService, } from '@serv/organizaciones.service';
import { EstadoOrgComponent, InfoComponent } from '@shared/components';

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
  constructor(private orgModel: OrganizacionesService,private dialog: MatDialog) { }
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
  activar(id:any) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(EstadoOrgComponent, {
        width: '400px',
        data: [true,id,"org"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerOrg()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar la fuente de financiamiento", 3);
    }
    } catch (error) {
      console.log(error);
    }
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
    } catch (error) {
      console.log(error);
    }
  }
}
