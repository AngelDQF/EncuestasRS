import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsosTierraInterface } from '@models/administrar/requerimientos/usos-tierra.interface';
import { RequerimientosService } from '@serv/requerimientos.service';
import { AgregarRequerimientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-usos-tierras',
  templateUrl: './usos-tierras.component.html',
  styleUrls: ['../../../../../cardLarge.css','../../../../../../app.component.css']
})
export class UsosTierrasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'uso', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerUsos();
  }
  obtenerUsos() {
    this.reqModel.getUsosTierra().subscribe((data: UsosTierraInterface[]) => {
      this.dataSource = new MatTableDataSource<UsosTierraInterface>(data);
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
        data:[1,'','usos']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerUsos() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la organización", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarRequerimientoComponent, {
        width: '500px',
        data:[2,id,'usos']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerUsos() });
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
}
