import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TenenciaTierraInterface } from '@models/administrar/requerimientos/tenencia.interface';
import { RequerimientosService } from '@serv/requerimientos.service';
import { AgregarRequerimientoComponent, EstadoRequerimientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-tenencia-tierras',
  templateUrl: './tenencia-tierras.component.html',
  styleUrls: ['../../../../../cardLarge.css','../../../../../../app.component.css']
})
export class TenenciaTierrasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tenencia', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerTenencia();
  }
  obtenerTenencia() {
    this.reqModel.getTenenciaTierras().subscribe((data: TenenciaTierraInterface[]) => {
      this.dataSource = new MatTableDataSource<TenenciaTierraInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda = "";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  agregar(){
    try {
      const dialogRef = this.dialog.open(AgregarRequerimientoComponent, {
        width: '500px',
        data:[1,'','tenencia']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerTenencia() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la organización", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarRequerimientoComponent, {
        width: '500px',
        data:[2,id,'tenencia']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerTenencia() });
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
  desactivar(id:any) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(EstadoRequerimientoComponent, {
        width: '400px',
        data: [false,id,"tenencia"],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerTenencia()});
    }else{
      this.mensaje("Error", "Ha ocurrido un error al desactivar el tipo de tenencia de la tierra", 3);
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
}
