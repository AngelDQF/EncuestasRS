import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { EncuestasService } from '@serv/encuestas.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css', '../../../app.component.css']
})
export class PruebasComponent implements OnInit {
  public formPadre: any = this.fb.group({});
  constructor(private fb: FormBuilder, private encuestasModel: EncuestasService) {
    this.formPadre = this.fb.group({
      orgSociales: this.fb.array([])
    });
  }
  get orgSociales(): FormArray {
    return this.formPadre.get('orgSociales') as FormArray;
  }
  addOrgSocial(): void {
    this.orgSociales.push(this.fb.group({
      nombre: [''],
      descripcion: ['']
    }));
  }
  ngOnInit(): void {
  }
  addBoton() {
    this.organizacionesSociales();
  }

    sociales: any;
    organizacionesSociales() {
      this.encuestasModel.getOrganizacionesSociales$().subscribe((response: OrganizacionesInterface[]) => {
        this.sociales = response;
      })
    }
  }
