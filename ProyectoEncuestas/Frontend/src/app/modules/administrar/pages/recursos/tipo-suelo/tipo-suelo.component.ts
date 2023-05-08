import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuelosInterface } from '@models/administrar/recursos/suelos.interface';
import { RecursosService } from '@serv/recursos.service';
import { AgregarRecursoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-tipo-suelo',
  templateUrl: './tipo-suelo.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TipoSueloComponent {
  displayedColumns: string[] = ['id', 'opciones', 'suelo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private suelosModel: RecursosService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerSuelos();
  }
  obtenerSuelos() {
    this.suelosModel.getSuelos().subscribe((data: SuelosInterface[]) => {
      this.dataSource = new MatTableDataSource<SuelosInterface>(data);
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
      const dialogRef = this.dialog.open(AgregarRecursoComponent, {
        width: '500px',
        data:[1,'','suelo']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerSuelos() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear el Tipo de Suelo", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarRecursoComponent, {
        width: '500px',
        data:[2,id,'suelo']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerSuelos() });
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
