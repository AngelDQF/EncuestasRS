import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';
import { FinanciamientosService} from '@serv/financiamientos.service';
import { AgregarFinanciamientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-tipos-financiamientos',
  templateUrl: './tipos-financiamientos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']

})
export class TiposFinanciamientosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tipo', 'estado'];
  dataSource: any;
  txtBusqueda:string ="";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private finanModel: FinanciamientosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerTipos();
  }
  obtenerTipos() {
    this.finanModel.getTiposFinanciamientoDesactivados().subscribe((data: TiposOrgInterface[]) => {
      this.dataSource = new MatTableDataSource<TiposOrgInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
  buscarTabla() {
    // Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  agregar(){
    try {
      const dialogRef = this.dialog.open(AgregarFinanciamientoComponent, {
        width: '500px',
        data:[1,'','tipo']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerTipos() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la organización", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarFinanciamientoComponent, {
        width: '500px',
        data:[2,id,'tipo']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerTipos() });
    } catch (error) {
      this.mensaje("Error","Ha ocurrido un error al editar",3);
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
