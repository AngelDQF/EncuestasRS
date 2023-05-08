import { RecursosService }  from '@serv/recursos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';
import { AgregarRecursoComponent, InfoComponent } from '@shared/components';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bosques',
  templateUrl: './bosques.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css'],
})
export class BosquesComponent implements OnInit{
  displayedColumns: string[] = ['id', 'opciones', 'bosque', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bosquesModel: RecursosService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerBosques();
  }
  obtenerBosques() {
    this.bosquesModel.getBosques().subscribe((data: BosquesInterface[]) => {
      this.dataSource = new MatTableDataSource<BosquesInterface>(data);
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
        data:[1,'','bosque']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerBosques() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear el Tipo de Bosque", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarRecursoComponent, {
        width: '500px',
        data:[2,id,'bosque']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerBosques() });
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
