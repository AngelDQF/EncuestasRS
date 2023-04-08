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
  displayedColumns: string[] = ['id', 'opciones', 'caserio', 'municipio', 'departamento'];
  dataSource: any;
  buscarCaserio: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ubicacionesModel: UbicacionesService) {
  }
  ngOnInit(): void {
    this.refresh()
  }
  callSearch(tern: string): void {
    this.ubicacionesModel.getSearchCaserios$(this.buscarCaserio).subscribe((data: CaseriosInterface[]) => {
      this.dataSource = new MatTableDataSource<CaseriosInterface>(data);
    })
  }
  refresh() {
    this.ubicacionesModel.getCaserios().subscribe((data: CaseriosInterface[]) => {
      this.dataSource = new MatTableDataSource<CaseriosInterface>(data);
      this.dataSource.paginator = this.paginator;
    });
    this.buscarCaserio = "";
  }
}
