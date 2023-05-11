import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';
import { RecursosService }  from '@serv/recursos.service';
import { EstadoRecursoComponent, InfoComponent } from '@shared/components';


@Component({
  selector: 'app-bosques-desactivados',
  templateUrl: './bosques-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class BosquesDesactivadosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'opciones', 'bosque', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bosquesModel: RecursosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerBosques();
  }
  obtenerBosques() {
    this.bosquesModel.getBosquesDesactivados().subscribe((data: BosquesInterface[]) => {
      this.dataSource = new MatTableDataSource<BosquesInterface>(data);
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
        data: [true,id,"bosque"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerBosques()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al desactivar el tipo de bosque", 3);
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
