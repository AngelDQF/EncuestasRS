import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MercadosInterface } from '@models/administrar/requerimientos/mercados.interface';
import { RequerimientosService } from '@serv/requerimientos.service';
import { AgregarRequerimientoComponent, InfoComponent } from '@shared/components';

@Component({
  selector: 'app-mercados',
  templateUrl: './mercados.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class MercadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'mercado', 'estado'];
  dataSource: any;
  txtBusqueda:string="";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService,private dialog:MatDialog) { }
  ngOnInit(): void {
    this.obtenerMercados();
  }
  obtenerMercados() {
    this.reqModel.getMercados().subscribe((data: MercadosInterface[]) => {
      this.dataSource = new MatTableDataSource<MercadosInterface>(data);
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
      const dialogRef = this.dialog.open(AgregarRequerimientoComponent, {
        width: '500px',
        data:[1,'','mercado']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerMercados() });
    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la organización", 3);
    }
  }
  editar(id:any){
    try {
      const dialogRef = this.dialog.open(AgregarRequerimientoComponent, {
        width: '500px',
        data:[2,id,'mercado']
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerMercados() });
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
