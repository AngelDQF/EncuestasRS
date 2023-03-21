import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { OrganizacionesService, TiposOrganizacion, TiposOrganizacionResponse } from '@serv/organizaciones.service';

@Component({
  selector: 'app-organizaciones-tipos',
  templateUrl: './organizaciones-tipos.component.html',
  styleUrls: ['../../../../card.css','../../../../../app.component.css']
})
export class OrganizacionesTiposComponent {
  page:any;
  orgs: TiposOrganizacion[] = [];
  constructor(private orgModel:OrganizacionesService,private router:Router) {
    this.orgModel.getTiposOrganizacion().subscribe((data: TiposOrganizacionResponse)=>{
      this.orgs = data.results;
      })
  }
}
