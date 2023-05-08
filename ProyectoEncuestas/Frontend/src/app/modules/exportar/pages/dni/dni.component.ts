import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReferenciasService } from '@serv/referencias.service';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css','../../../card.css','../../../../app.component.css']
})
export class DniComponent {
  txtBusqueda:string="";
  constructor(private refModel: ReferenciasService,private dialog: MatDialog) { }
 /* obtenerEjes() {
    this.ejesModel.getEjes().subscribe((data: EjesInterface[]) => {
      this.dataSource = new MatTableDataSource<EjesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda=""
  }*/
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    //this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
