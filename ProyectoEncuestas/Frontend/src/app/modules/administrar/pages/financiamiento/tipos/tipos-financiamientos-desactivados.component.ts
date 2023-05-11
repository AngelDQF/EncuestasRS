import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';
import { FinanciamientosService } from '@serv/financiamientos.service';
import { EstadoFinanciamientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-tipos-financiamientos-desactivados',
  templateUrl: './tipos-financiamientos-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TiposFinanciamientosDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tipo', 'estado'];
  dataSource: any;
  txtBusqueda:string ="";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private finanModel: FinanciamientosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerTiposDesactivados();
  }
  obtenerTiposDesactivados() {
    this.finanModel.getTiposFinanciamientoDesactivados().subscribe((data: TiposOrgInterface[]) => {
      this.dataSource = new MatTableDataSource<TiposOrgInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
  buscarTabla() {
    // Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  activar(id:any) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(EstadoFinanciamientoComponent, {
        width: '400px',
        data: [true,id,"tipo"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerTiposDesactivados()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
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
