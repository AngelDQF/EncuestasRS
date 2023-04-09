import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MercadosInterface } from '@models/administrar/requerimientos/mercados.interface';
import { RequerimientosService } from '@serv/requerimientos.service';

@Component({
  selector: 'app-mercados-desactivados',
  templateUrl: './mercados-desactivados.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class MercadosDesactivadosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'mercado', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private reqModel: RequerimientosService) { }
  ngOnInit(): void {
    this.obtenerMercados();
  }
  obtenerMercados() {
    this.reqModel.getMercadosDesactivados().subscribe((data: MercadosInterface[]) => {
      this.dataSource = new MatTableDataSource<MercadosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
