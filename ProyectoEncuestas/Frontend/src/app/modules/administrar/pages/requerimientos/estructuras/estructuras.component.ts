import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EstructurasInterface } from '@models/administrar/requerimientos/estructuras.interface';
import {  RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class EstructurasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'estructura', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService) { }
  ngOnInit(): void {
    this.obtenerEstructuras();
  }
  obtenerEstructuras() {
    this.reqModel.getEstructuras().subscribe((data: EstructurasInterface[]) => {
      this.dataSource = new MatTableDataSource<EstructurasInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
