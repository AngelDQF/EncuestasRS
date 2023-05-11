import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MercadosInterface } from '@models/administrar/requerimientos/mercados.interface';
import { RequerimientosService } from '@serv/requerimientos.service';
import { EstadoRequerimientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-mercados-desactivados',
  templateUrl: './mercados-desactivados.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class MercadosDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'mercado', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerMercados();
  }
  obtenerMercados() {
    this.reqModel.getMercadosDesactivados().subscribe((data: MercadosInterface[]) => {
      this.dataSource = new MatTableDataSource<MercadosInterface>(data);
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
      const dialogRef= this.dialog.open(EstadoRequerimientoComponent, {
        width: '400px',
        data: [true,id,"mercado"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerMercados()});
    }else{
      this.mensaje("Error", "Ha ocurrido un error al activar el mercado", 3);
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
