import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { EstadoOrgComponent, InfoComponent } from '@shared/components';
import { AgregarOrgComponent } from '@shared/components/modals/organizaciones/agregar-org/agregar-org.component';

@Component({
  selector: 'app-organizaciones-tipos',
  templateUrl: './organizaciones-tipos.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class OrganizacionesTiposComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tipo'];
  dataSource: any;
  txtBusqueda: string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orgModel: OrganizacionesService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.orgModel.getTiposOrganizacion().subscribe((data: TiposOrgInterface[]) => {
      this.dataSource = new MatTableDataSource<TiposOrgInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda = "";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  agregar() {
    try {
      const dialogRef = this.dialog.open(AgregarOrgComponent, {
        width: '500px',
        data: [1, '', 'tipo']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la Organización", 3);
    }
  }
  editar(id: any) {
    try {
      const dialogRef = this.dialog.open(AgregarOrgComponent, {
        width: '500px',
        data: [2, id, 'tipo']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });
    } catch (error) {
      this.mensaje("Error", "Ha ocurrido un error al editar", 3);
    }
  }
  desactivar(id:any) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(EstadoOrgComponent, {
        width: '400px',
        data: [false,id,"tipo"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerOrg()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar la fuente de financiamiento", 3);
    }
    } catch (error) {
      console.log(error);
    }
  }
  showBoton(id: number){
    if(id ==null || id == undefined){
      return false;
    }else{
      return true;
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
