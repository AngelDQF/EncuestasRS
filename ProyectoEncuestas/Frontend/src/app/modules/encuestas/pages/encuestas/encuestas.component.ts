import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentosInterface } from '@models/ubicaciones/departamentos.interface';
import { Departamento, EncuestasService, UserDepartamentosResponse } from '@serv/encuestas.service';
import { UbicacionesService } from '@serv/ubicaciones.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  mujeres: number = 0;
  hombres: number = 0;
  total: number = this.mujeres + this.hombres;
  departamentos: any;
  selectDep: string;
  title: string = "Encuestas"
  formEncuestas: FormGroup = new FormGroup({});
  constructor(private encuestasModel: EncuestasService, private ubicacionModel: UbicacionesService) {

    this.ubicacionModel.getDepartamentos().subscribe((response: DepartamentosInterface) => {
      this.departamentos = response;
    })
  }
  ngOnInit(): void {
    this.formEncuestas = new FormGroup(
      {
        totalHombres: new FormControl('', [
          Validators.required,
        ]),
        totalMujeres: new FormControl('', [
          Validators.required,
        ]),
        totalAsistencia: new FormControl('', [
          Validators.required,
        ])
      }
    )
  }
}
