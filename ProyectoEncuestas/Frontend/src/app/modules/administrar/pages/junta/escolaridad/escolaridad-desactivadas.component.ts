import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EscolaridadInterface } from '@models/administrar/junta/escolaridad.interface';
import { JuntaService } from '@serv/junta.service';
import { CambiarEstadoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-escolaridad-desactivadas',
  templateUrl: './escolaridad-desactivadas.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class EscolaridadDesactivadasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'grado', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private juntaModel: JuntaService,private dialog: MatDialog) { }
  ngOnInit(): void {
    this.obtenerGradosDesactivados();
  }
  obtenerGradosDesactivados() {
    this.juntaModel.getGradosDesactivados().subscribe((data: EscolaridadInterface[]) => {
      this.dataSource = new MatTableDataSource<EscolaridadInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  activar(id:number) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(CambiarEstadoComponent, {
        width: '400px',
        data: [id,"Activar",1,'grado'],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerGradosDesactivados()})
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
    }
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
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


