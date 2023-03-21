import { Component } from '@angular/core';
import { Organizacion, OrganizacionesResponse, OrganizacionesService, } from '@serv/organizaciones.service';

@Component({
  selector: 'app-organizaciones-desactivados',
  templateUrl: './organizaciones-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class OrganizacionesDesactivadosComponent {
  page:any;
  orgsDes: Organizacion[] = [];
  constructor(private orgModel:OrganizacionesService) {
    this.orgModel.getOrganizacionesDesactivados().subscribe((data: OrganizacionesResponse)=>{
      this.orgsDes = data.results;
      })
  }
}
