import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosInterface } from '@models/administrar/servicios/servicios.interface';
import { ServiciosService } from '@serv/servicios.service';
import { AgregarServicioComponent, EstadoServicioComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-locales',
  templateUrl: './locales.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class LocalesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'servicio', 'tipo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private serviciosModel: ServiciosService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerOrg();
  }
  obtenerOrg() {
    this.serviciosModel.getSerLocales().subscribe((data: ServiciosInterface[]) => {
      this.dataSource = new MatTableDataSource<ServiciosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  agregar(){
    try {
      const dialogRef = this.dialog.open(AgregarServicioComponent, {
        width: '500px',
        data:[1,'','local']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la organización", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarServicioComponent, {
        width: '500px',
        data:[2,id,'local']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerOrg() });
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
      const dialogRef= this.dialog.open(EstadoServicioComponent, {
        width: '400px',
        data: [false,id],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerOrg()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar la fuente de financiamiento", 3);
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
