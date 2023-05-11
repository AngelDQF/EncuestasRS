import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { EstadoOrgComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-organizaciones-tipos-desactivados',
  templateUrl: './organizaciones-tipos-desactivados.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class OrganizacionesTiposDesactivadosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'opciones', 'tipo'];
  dataSource: any;
  txtBusqueda: string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orgModel: OrganizacionesService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.orgModel.getTiposOrganizacionDesactivados().subscribe((data: TiposOrgInterface[]) => {
      this.dataSource = new MatTableDataSource<TiposOrgInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda = "";
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
        data: [true,id,"tipo"],
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
