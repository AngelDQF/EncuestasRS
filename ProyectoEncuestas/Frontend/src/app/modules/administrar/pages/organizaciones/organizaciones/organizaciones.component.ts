import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { InfoComponent } from '@shared/components/modals/info/info.component';
import { AgregarOrgComponent } from '@shared/components/modals/organizaciones/agregar-org/agregar-org.component';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['../../../../../app.component.css','../../../../card.css']
})
export class OrganizacionesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'org', 'tipo', 'social','estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orgModel: OrganizacionesService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.orgModel.getOrganizaciones().subscribe((data: OrganizacionesInterface[]) => {
      this.dataSource = new MatTableDataSource<OrganizacionesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }

  agregar(){
    try {
      const dialogRef = this.dialog.open(AgregarOrgComponent, {
        width: '500px',
        data:[1]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });

    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear el Cargo", 3);
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
