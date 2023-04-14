import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FuenteFinancimientoInterface } from '@models/administrar/financiamientos/fuentes-financiamientos.interface';
import { FinanciamientosService} from '@serv/financiamientos.service';

@Component({
  selector: 'app-fuentes-financiamientos',
  templateUrl: './fuentes-financiamientos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class FuentesFinanciamientosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'fuente', 'estado'];
  dataSource: any;
  txtBusqueda:string ="";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private finanModel: FinanciamientosService) { }
  ngOnInit(): void {
    this.obtenerFuentes();
  }
  obtenerFuentes() {
    this.finanModel.getFuentesFinanciamiento().subscribe((data: FuenteFinancimientoInterface[]) => {
      this.dataSource = new MatTableDataSource<FuenteFinancimientoInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
  buscarTabla() {
    // Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
