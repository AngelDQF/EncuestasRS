import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TenenciaTierraInterface } from '@models/administrar/requerimientos/tenencia.interface';
import { RequerimientosService} from '@serv/requerimientos.service';
import { EstadoRequerimientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-tenencia-tierras-desactivadas',
  templateUrl: './tenencia-tierras-desactivadas.component.html',
  styleUrls: ['../../../../../cardLarge.css','../../../../../../app.component.css']
})
export class TenenciaTierrasDesactivadasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tenencia', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerTenencia();
  }
  obtenerTenencia() {
    this.reqModel.getTenenciaTierrasDesactivados().subscribe((data: TenenciaTierraInterface[]) => {
      this.dataSource = new MatTableDataSource<TenenciaTierraInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda = "";
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
        data: [true,id,"tenencia"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerTenencia()});
    }else{
      this.mensaje("Error", "Ha ocurrido un error al activar el tipo de tenencia de la tierra", 3);
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
