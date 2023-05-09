import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FuenteFinancimientoInterface } from '@models/administrar/financiamientos/fuentes-financiamientos.interface';
import { FinanciamientosService} from '@serv/financiamientos.service';
import { AgregarFinanciamientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-fuentes-financiamientos',
  templateUrl: './fuentes-financiamientos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class FuentesFinanciamientosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'fuente', 'estado'];
  dataSource: any;
  txtBusqueda:string ="";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private finanModel: FinanciamientosService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerFuentes();
  }
  obtenerFuentes() {
    this.finanModel.getFuentesFinanciamiento().subscribe((data: FuenteFinancimientoInterface[]) => {
      this.dataSource = new MatTableDataSource<FuenteFinancimientoInterface>(data);
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
        data:[1,'','fuente']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerFuentes() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la organización", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarFinanciamientoComponent, {
        width: '500px',
        data:[2,id,'fuente']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerFuentes() });
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
