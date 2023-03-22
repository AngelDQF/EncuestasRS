import { MunicipiosInterface } from '@models/ubicaciones/municipios.interface.ts';
import { Component, OnInit } from '@angular/core';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class MunicipiosComponent implements OnInit{
  municipios:any;
  buscarMunicipio:any;
  public page!:number;
  constructor(private ubicacionesModel: UbicacionesService) {}
  ngOnInit(): void {
    this.refresh();
  }
  callSearch(tern: string): void {
      this.ubicacionesModel.getSearchMunicipios$(this.buscarMunicipio).subscribe((response: MunicipiosInterface[]) => {
        this.municipios = response;
      })
  }
  refresh(){
    this.ubicacionesModel.getMunicipios$().subscribe((response: MunicipiosInterface[]) => { 
      this.municipios = response;
    });
    this.buscarMunicipio="";
  }
}
