import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FuenteFinancimientoInterface } from '@models/administrar/financiamientos/fuentes-financiamientos.interface';
import { FinanciamientosService } from '@serv/financiamientos.service';

@Component({
  selector: 'app-fuentes-financiamientos-desactivadas',
  templateUrl: './fuentes-financiamientos-desactivadas.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class FuentesFinanciamientosDesactivadasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'fuente', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private finanModel: FinanciamientosService) { }
  ngOnInit(): void {
    this.obtenerFuentes();
  }
  obtenerFuentes() {
    this.finanModel.getFuentesFinanciamientoDesactivados().subscribe((data: FuenteFinancimientoInterface[]) => {
      this.dataSource = new MatTableDataSource<FuenteFinancimientoInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
