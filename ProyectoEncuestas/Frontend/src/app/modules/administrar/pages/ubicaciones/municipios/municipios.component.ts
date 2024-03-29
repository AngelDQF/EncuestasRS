import { MunicipiosInterface } from '@models/ubicaciones/municipios.interface.ts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UbicacionesService } from '@serv/ubicaciones.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class MunicipiosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'mun','dep'];
  dataSource: any;
  txtBusqueda:string ="";
  public page!:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ubicacionesModel: UbicacionesService) {  }
  ngOnInit(): void {
    this.refresh();
  }
  buscarTabla() {
    // Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
  refresh(){
    this.ubicacionesModel.getMunicipios$().subscribe((data: MunicipiosInterface[]) => {
      this.dataSource = new MatTableDataSource<MunicipiosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda="";
  }
}
