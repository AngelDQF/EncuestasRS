import { Component, OnInit, ViewChild } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { MatPaginator } from '@angular/material/paginator';
import { CargosInterface } from '@models/administrar/junta/cargos.interface';
import { MatTableDataSource } from '@angular/material/table';
import { AgregarCargoComponent, AgregarEscolaridadComponent, CambiarEstadoComponent, InfoComponent } from '@shared/components';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class CargosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'cargo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private cargosModel: JuntaService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtenerCargos();
  }
  obtenerCargos(){
    this.cargosModel.getCargos().subscribe((data: CargosInterface[]) => {
      this.dataSource = new MatTableDataSource<CargosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  desactivar(id:number) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(CambiarEstadoComponent, {
        width: '400px',
        data: [id,"Desactivar",0,'cargo'],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerCargos()})
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
    }
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
    }
  }
  newCargo(): void {
    try {
      const dialogRef = this.dialog.open(AgregarCargoComponent, {
        width: '500px',
        data:[1]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerCargos() });

    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear el Cargo", 3);
    }
  }

  editar(id:number): void {
    try {
      const dialogRef = this.dialog.open(AgregarCargoComponent, {
        width: '500px',
        data:[2,id]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerCargos() });

    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Editar el Cargo", 3);
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
