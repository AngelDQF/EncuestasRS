import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SuelosInterface } from '@models/administrar/recursos/suelos.interface';
import { RecursosService } from '@serv/recursos.service';

@Component({
  selector: 'app-tipo-suelo-desactivados',
  templateUrl: './tipo-suelo-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class TipoSueloDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'suelo', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private suelosModel: RecursosService) { }
  ngOnInit(): void {
    this.obtenerSuelos();
  }
  obtenerSuelos() {
    this.suelosModel.getSuelosDesactivados().subscribe((data: SuelosInterface[]) => {
      this.dataSource = new MatTableDataSource<SuelosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
