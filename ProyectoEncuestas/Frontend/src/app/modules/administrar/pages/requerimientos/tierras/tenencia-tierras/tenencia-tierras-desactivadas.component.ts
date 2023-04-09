import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { TenenciaTierraInterface } from '@models/administrar/requerimientos/tenencia.interface';
import { RequerimientosService} from '@serv/requerimientos.service';

@Component({
  selector: 'app-tenencia-tierras-desactivadas',
  templateUrl: './tenencia-tierras-desactivadas.component.html',
  styleUrls: ['../../../../../cardLarge.css','../../../../../../app.component.css']
})
export class TenenciaTierrasDesactivadasComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'tenencia', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService) { }
  ngOnInit(): void {
    this.obtenerTenencia();
  }
  obtenerTenencia() {
    this.reqModel.getTenenciaTierrasDesactivados().subscribe((data: TenenciaTierraInterface[]) => {
      this.dataSource = new MatTableDataSource<TenenciaTierraInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
