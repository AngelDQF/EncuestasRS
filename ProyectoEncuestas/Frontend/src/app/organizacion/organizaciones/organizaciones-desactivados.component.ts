import { Component } from '@angular/core';
import { Organizacion, OrganizacionesResponse, OrganizacionesService, } from 'src/app/services/organizaciones.service';

@Component({
  selector: 'app-organizaciones-desactivados',
  templateUrl: './organizaciones-desactivados.component.html',
  styleUrls: ['../organizacion.component.css','../../app.component.css']
})
export class OrganizacionesDesactivadosComponent {
  orgsDes: Organizacion[] = [];
  constructor(private orgModel:OrganizacionesService) {
    this.orgModel.getOrganizacionesDesactivados().subscribe((data: OrganizacionesResponse)=>{
      this.orgsDes = data.results;
      })
  }
}
