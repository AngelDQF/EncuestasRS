import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento, EncuestasService, UserDepartamentosResponse } from '@serv/encuestas.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  title:string="Encuestas"
  formEncuestas:FormGroup=new FormGroup({});
  departamentos: Departamento[] = [];
  constructor(private encuestasModel:EncuestasService) {
    this.encuestasModel.getDepartamentosUser().subscribe((data: UserDepartamentosResponse)=>{
      this.departamentos = data.results;
      })
  }
  ngOnInit(): void {
    this.formEncuestas=new FormGroup(
      {
        totalHombres:new FormControl(0,[
          Validators.required,
        ]),
        totalMujeres:new FormControl(0,[
          Validators.required,
        ]),
        totalAsistencia:new FormControl(0,[
          Validators.required,
        ])
      }
    )
   }
}
