import { Component, ViewChild, OnInit } from '@angular/core';
import { JuntaService } from '@serv/junta.service';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-ejes',
  templateUrl: './ejes.component.html',
  styleUrls: ['../../../../card.css', '../../../../../app.component.css']
})
export class EjesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'eje', 'estado'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ejesModel: JuntaService) { }
  ngOnInit(): void {
    this.obtenerEjes();

  }
  nombrarEstado(est: boolean): void {
    if (est) {
      this.dataSource.data.est = 'Activo';
    }
  }
  obtenerEjes() {
    this.ejesModel.getEjes().subscribe((data: EjesInterface[]) => {
      this.dataSource = new MatTableDataSource<EjesInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }

}  
