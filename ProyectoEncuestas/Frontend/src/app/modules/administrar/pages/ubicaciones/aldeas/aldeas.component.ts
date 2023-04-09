import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AldeasInterface } from '@models/ubicaciones/aldeas.interface';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-aldeas',
  templateUrl: './aldeas.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class AldeasComponent implements OnInit{
  displayedColumns: string[] = ['id','aldea', 'mun','dep'];
  dataSource: any;
  buscarAldea:string;
  public page!:number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ubicacionesModel: UbicacionesService) {  }
  ngOnInit(): void {
    this.refresh();
  }
  callSearch(tern: string): void {
    if (tern.length >= 3) {
      this.ubicacionesModel.getSearchAldeas$(this.buscarAldea).subscribe((response: AldeasComponent[]) => {
        this.dataSource = response;
      })
    }
  }
  refresh(){
    this.ubicacionesModel.getAldeas().subscribe((data: AldeasInterface[]) => {
      this.dataSource = new MatTableDataSource<AldeasInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.buscarAldea="";
  }
}
