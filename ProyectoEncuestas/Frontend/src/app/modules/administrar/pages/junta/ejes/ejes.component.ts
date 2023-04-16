import { Component, ViewChild, OnInit } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InfoComponent, PutEjeComponent } from '@shared/components';
@Component({
  selector: 'app-ejes',
  templateUrl: './ejes.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class EjesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'eje', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ejesModel: JuntaService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtenerEjes();

  }
  obtenerEjes() {
    this.ejesModel.getEjes().subscribe((data: EjesInterface[]) => {
      this.dataSource = new MatTableDataSource<EjesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda=""
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  putEje(id:any): void {
    try {
      const dialogRef = this.dialog.open(PutEjeComponent, {
        width: '500px',
        data:[id]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerEjes() });

    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear el Eje", 3);
    }
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      const dialogRef = this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerEjes() });
    } catch (error) {
      console.log(error);
    }
  }

}  
