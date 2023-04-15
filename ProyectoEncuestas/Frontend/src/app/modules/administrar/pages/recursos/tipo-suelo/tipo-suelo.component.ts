import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuelosInterface } from '@models/administrar/recursos/suelos.interface';
import { RecursosService } from '@serv/recursos.service';

@Component({
  selector: 'app-tipo-suelo',
  templateUrl: './tipo-suelo.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TipoSueloComponent {
  displayedColumns: string[] = ['id', 'opciones', 'suelo', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private suelosModel: RecursosService) { }
  ngOnInit(): void {
    this.obtenerSuelos();
  }
  obtenerSuelos() {
    this.suelosModel.getSuelos().subscribe((data: SuelosInterface[]) => {
      this.dataSource = new MatTableDataSource<SuelosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
