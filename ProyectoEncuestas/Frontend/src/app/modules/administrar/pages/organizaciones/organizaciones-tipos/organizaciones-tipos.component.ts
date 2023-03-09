import { Component } from '@angular/core';
import { OrganizacionesService, TiposOrganizacion, TiposOrganizacionResponse } from '@serv/organizaciones.service';

@Component({
  selector: 'app-organizaciones-tipos',
  templateUrl: './organizaciones-tipos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class OrganizacionesTiposComponent {
  orgs: TiposOrganizacion[] = [];
  constructor(private orgModel:OrganizacionesService) {
    this.orgModel.getTiposOrganizacion().subscribe((data: TiposOrganizacionResponse)=>{
      this.orgs = data.results;
      })
  }
}