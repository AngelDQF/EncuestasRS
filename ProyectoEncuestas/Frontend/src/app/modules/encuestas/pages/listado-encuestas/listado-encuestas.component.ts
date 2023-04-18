import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EncuestasInterface } from '@models/encuesta/encuesta.interface';
import {  EncuestasService } from '@serv/encuestas.service';
@Component({
  selector: 'app-listado-encuestas',
  templateUrl: './listado-encuestas.component.html',
  styleUrls: ['./listado-encuestas.component.css', '../../../../app.component.css', '../../../card.css']
})
export class ListadoEncuestasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dep', 'mun', 'aldea', 'caserio', 'address', 'hombres', 'mujeres', 'asistencia', 'org', 'exRios', 'cantRios', 'extBosques', 'tipoBosque', 'tipoSuelo', 'tenencia', 'mercado', 'tecno', 'mercado', 'fecha', 'hora', 'user'];

  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private encuestasModel: EncuestasService) {
  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh() {
    this.encuestasModel.getEncuestas().subscribe((data: EncuestasInterface[]) => {
      this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
