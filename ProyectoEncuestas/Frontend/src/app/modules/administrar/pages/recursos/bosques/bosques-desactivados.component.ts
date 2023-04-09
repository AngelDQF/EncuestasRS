import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';
import { RecursosService }  from '@serv/recursos.service';


@Component({
  selector: 'app-bosques-desactivados',
  templateUrl: './bosques-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class BosquesDesactivadosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'opciones', 'bosque', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bosquesModel: RecursosService) { }
  ngOnInit(): void {
    this.obtenerBosques();
  }
  obtenerBosques() {
    this.bosquesModel.getBosquesDesactivados().subscribe((data: BosquesInterface[]) => {
      this.dataSource = new MatTableDataSource<BosquesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

}
