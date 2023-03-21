import { Component, OnInit } from '@angular/core';
import { CaseriosInterface } from '@models/ubicaciones/caserios.interface';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-caserios',
  templateUrl: './caserios.component.html',
  styleUrls: ['../../../../cardLarge.css', '../../../../../app.component.css']
})
export class CaseriosComponent implements OnInit {
  caserios: any;
  buscarCaserio: any;
  public page!: number;
  constructor(private ubicacionesModel: UbicacionesService) {
  }
  ngOnInit(): void {
    this.refresh()
  }
  callSearch(tern: string): void {
      this.ubicacionesModel.getSearchCaserios$(this.buscarCaserio).subscribe((response: CaseriosInterface[]) => {
        this.caserios = response;
      })
  }
  refresh(){
    this.ubicacionesModel.getCaserios().subscribe((response: CaseriosInterface[]) => {
      this.caserios = response;
    });
    this.buscarCaserio="";
  }
}
