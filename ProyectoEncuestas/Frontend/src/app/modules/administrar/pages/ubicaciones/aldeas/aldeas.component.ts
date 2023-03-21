import { Component, OnInit } from '@angular/core';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-aldeas',
  templateUrl: './aldeas.component.html',
  styleUrls: ['../../../../cardLarge.css','../../../../../app.component.css']
})
export class AldeasComponent implements OnInit{
  aldeas:any;
  page:any;
  buscarAldea:string;
  constructor(private ubicacionesModel:UbicacionesService){

  }
  ngOnInit(): void {
    this.refresh()
  }
  callSearch(tern: string): void {
    if (tern.length >= 3) {
      this.ubicacionesModel.getSearchAldeas$(this.buscarAldea).subscribe((response: AldeasComponent[]) => {
        this.aldeas = response;
      })
    }
  }
  refresh(){
    this.ubicacionesModel.getAldeas().subscribe((response: AldeasComponent[]) => {
      this.aldeas = response;
    });
    this.buscarAldea="";
  }
}
