import { Component } from '@angular/core';
import { Organizacion, OrganizacionesResponse, OrganizacionesService } from 'src/app/services/organizaciones.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['../../../../../app.component.css','../../card.css']
})
export class OrganizacionesComponent {
  orgs: Organizacion[] = [];
  constructor(private orgModel: OrganizacionesService) {
    this.orgModel.getOrganizaciones().subscribe((data: OrganizacionesResponse) => {
      this.orgs = data.results;
    })
  }
}
