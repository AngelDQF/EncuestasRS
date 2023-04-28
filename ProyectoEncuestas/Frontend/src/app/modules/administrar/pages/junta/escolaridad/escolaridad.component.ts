import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EscolaridadInterface } from '@models/administrar/junta/escolaridad.interface';
import { JuntaService } from '@serv/junta.service';
import { AgregarEscolaridadComponent, CambiarEstadoComponent, InfoComponent } from '@shared/components';


@Component({
  selector: 'app-escolaridad',
  templateUrl: './escolaridad.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class EscolaridadComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'grado', 'estado'];
  dataSource: any;
  txtBusqueda:string ="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private juntaModel: JuntaService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtenerGrados();
  }
  obtenerGrados(){
    this.juntaModel.getGrados().subscribe((data: EscolaridadInterface[]) => {
      this.dataSource = new MatTableDataSource<EscolaridadInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }

  newGrado(): void {
    try {
      const dialogRef = this.dialog.open(AgregarEscolaridadComponent, {
        width: '500px',
        data:[1]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerGrados() });

    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear el Grado de Escolaridad", 3);
    }
  }
  editar(id:number): void {
    try {
      const dialogRef = this.dialog.open(AgregarEscolaridadComponent, {
        width: '500px',
        data:[2,id]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerGrados() });

    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Editar el Grado de Escolaridad", 3);
    }
  }
  desactivar(id:number) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(CambiarEstadoComponent, {
        width: '400px',
        data: [id,"Desactivar",0,'grado'],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerGrados()})
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
    }
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
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
