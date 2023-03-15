import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento, EncuestasService, UserDepartamentosResponse } from '@serv/encuestas.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  mujeres: string = '0';
  hombres: string = '0';
  total: string='0';
  totalChange(result: number):void {
    result = parseInt(this.mujeres) + parseInt(this.hombres);
    console.log(result)
    this.total = result.toString();
  }

  title: string = "Encuestas"
  formEncuestas: FormGroup = new FormGroup({});
  departamentos: Departamento[] = [];
  constructor(private encuestasModel: EncuestasService) {
    this.encuestasModel.getDepartamentosUser().subscribe((data: UserDepartamentosResponse) => {
      this.departamentos = data.results;
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
