import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';
import { FinanciamientosService} from '@serv/financiamientos.service';

@Component({
  selector: 'app-tipos-financiamientos',
  templateUrl: './tipos-financiamientos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']

})
export class TiposFinanciamientosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tipo', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private finanModel: FinanciamientosService) { }
  ngOnInit(): void {
    this.obtenerTipos();
  }
  obtenerTipos() {
    this.finanModel.getTiposFinanciamientoDesactivados().subscribe((data: TiposOrgInterface[]) => {
      this.dataSource = new MatTableDataSource<TiposOrgInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
