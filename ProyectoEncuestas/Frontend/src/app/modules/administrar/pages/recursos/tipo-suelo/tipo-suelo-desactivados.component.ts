import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuelosInterface } from '@models/administrar/recursos/suelos.interface';
import { RecursosService } from '@serv/recursos.service';
import { EstadoRecursoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-tipo-suelo-desactivados',
  templateUrl: './tipo-suelo-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TipoSueloDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'suelo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private suelosModel: RecursosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerSuelos();
  }
  obtenerSuelos() {
    this.suelosModel.getSuelosDesactivados().subscribe((data: SuelosInterface[]) => {
      this.dataSource = new MatTableDataSource<SuelosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  activar(id:any) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(EstadoRecursoComponent, {
        width: '400px',
        data: [true,id,"suelo"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerSuelos()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al desactivar el tipo de suelo", 3);
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
  showEstado(estado:boolean){
    if(estado ==null || estado == undefined){
      return "";
    }else if(estado==true){
      return "Activo";
    }else{
      return "Inactivo";
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
