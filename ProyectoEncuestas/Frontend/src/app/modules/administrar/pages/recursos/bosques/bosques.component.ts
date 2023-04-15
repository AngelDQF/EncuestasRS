import { RecursosService }  from '@serv/recursos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';

@Component({
  selector: 'app-bosques',
  templateUrl: './bosques.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css'],
})
export class BosquesComponent implements OnInit{
  displayedColumns: string[] = ['id', 'opciones', 'bosque', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bosquesModel: RecursosService) { }
  ngOnInit(): void {
    this.obtenerBosques();
  }
  obtenerBosques() {
    this.bosquesModel.getBosques().subscribe((data: BosquesInterface[]) => {
      this.dataSource = new MatTableDataSource<BosquesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
