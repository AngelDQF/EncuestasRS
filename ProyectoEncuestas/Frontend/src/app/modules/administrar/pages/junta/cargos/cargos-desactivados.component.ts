import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CargosInterface } from '@models/administrar/junta/cargos.interface';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { JuntaService } from '@serv/junta.service';
import { CambiarEstadoComponent, InfoComponent } from '@shared/components';
@Component({
  selector: 'app-cargos-desactivados',
  templateUrl: './cargos-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class CargosDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'cargo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private cargosModel: JuntaService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerCargosDesactivados();
  }
  refresh(){
    this.obtenerCargosDesactivados();
  }
  obtenerCargosDesactivados(){
    this.cargosModel.getCargosDesactivados().subscribe((data: CargosInterface[]) => {
      this.dataSource = new MatTableDataSource<CargosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  activar(id:number) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(CambiarEstadoComponent, {
        width: '400px',
        data: [id,"Activar",1,'cargo'],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerCargosDesactivados()})
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Activar el Cargo", 3);
    }
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Activar el Cargo", 3);
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
