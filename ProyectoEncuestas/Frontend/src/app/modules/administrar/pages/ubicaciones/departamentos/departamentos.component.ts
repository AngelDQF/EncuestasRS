import { Component, OnInit } from '@angular/core';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class DepartamentosComponent implements OnInit{
  buscarDepartamento:string="";
  departamentos:any;
   page:any;
  constructor(private ubicacionesModel: UbicacionesService) {

  }
  ngOnInit(): void {
    this. refresh();
  }
  callSearch():void{
      this.ubicacionesModel.getSearchDepartamentos$(this.buscarDepartamento).subscribe((response: DepartamentosInterface[]) => {
        this.departamentos = response;
      })
  }
  refresh(){
    this.ubicacionesModel.getDepartamentos().subscribe((response: DepartamentosInterface[]) => {
      this.departamentos = response;
      console.log(this.departamentos)
    })
    this.buscarDepartamento="";
  }
}
