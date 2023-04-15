import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EscolaridadInterface } from '@models/administrar/junta/escolaridad.interface';
import { JuntaService } from '@serv/junta.service';

@Component({
  selector: 'app-escolaridad-desactivadas',
  templateUrl: './escolaridad-desactivadas.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class EscolaridadDesactivadasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'grado', 'estado'];
  dataSource: any;
  txtBusqueda:string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private juntaModel: JuntaService) { }
  ngOnInit(): void {
    this.obtenerGradosDesactivados();
  }
  obtenerGradosDesactivados() {
    this.juntaModel.getGradosDesactivados().subscribe((data: EscolaridadInterface[]) => {
      this.dataSource = new MatTableDataSource<EscolaridadInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}


