import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CaseriosInterface } from '@models/ubicaciones/caserios.interface';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-caserios',
  templateUrl: './caserios.component.html',
  styleUrls: ['../../../../cardLarge.css', '../../../../../app.component.css']
})
export class CaseriosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'caserio', 'aldea','municipio', 'departamento'];
  txtBusqueda: string = '';
  dataSource: any;
  buscarCaserio: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ubicacionesModel: UbicacionesService) {
  }
  ngOnInit(): void {
    this.refresh()
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  refresh() {
    this.ubicacionesModel.getCaserios().subscribe((data: CaseriosInterface[]) => {
      this.dataSource = new MatTableDataSource<CaseriosInterface>(data);
      this.dataSource.paginator = this.paginator;
    });
    this.buscarCaserio = "";
  }
}
