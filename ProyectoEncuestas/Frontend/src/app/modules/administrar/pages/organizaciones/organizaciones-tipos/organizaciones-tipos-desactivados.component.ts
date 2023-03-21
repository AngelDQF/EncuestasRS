import { Component } from '@angular/core';
import { OrganizacionesService, TiposOrganizacion, TiposOrganizacionResponse } from '@serv/organizaciones.service';

@Component({
  selector: 'app-organizaciones-tipos-desactivados',
  templateUrl: './organizaciones-tipos-desactivados.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class OrganizacionesTiposDesactivadosComponent {
  page:any
  orgs: TiposOrganizacion[] = [];
  constructor(private orgModel:OrganizacionesService) {
    this.orgModel.getTiposOrganizacionDesactivados().subscribe((data: TiposOrganizacionResponse)=>{
      this.orgs = data.results;
      })
  }
}
