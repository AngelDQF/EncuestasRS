import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class DepartamentosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'dep'];
  dataSource: any;
  buscarDepartamento:string="";

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ubicacionesModel: UbicacionesService) {  }
  ngOnInit(): void {
    this.refresh();
  }
  refresh(){
    this.ubicacionesModel.getDepartamentos().subscribe((data: DepartamentosInterface[]) => {
      this.dataSource = new MatTableDataSource<DepartamentosInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.buscarDepartamento="";
  }

  departamentos:DepartamentosInterface[];
   page:any;

  callSearch():void{
      this.ubicacionesModel.getSearchDepartamentos$(this.buscarDepartamento).subscribe((response: DepartamentosInterface[]) => {
        this.dataSource = response;
      },
      (error)=>{
        alert(error);
      })
  }

}
