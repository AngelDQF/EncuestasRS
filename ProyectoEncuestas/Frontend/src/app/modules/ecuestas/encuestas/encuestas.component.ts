import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Departamento, EncuestasService, UserDepartamentosResponse } from '@serv/encuestas.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../app.component.css']
})
export class EncuestasComponent {
  title:string="Encuestas"
  formEncuestas:FormGroup=new FormGroup({});
  departamentos: Departamento[] = [];
  constructor(private encuestasModel:EncuestasService) {
    this.encuestasModel.getDepartamentosUser().subscribe((data: UserDepartamentosResponse)=>{
      this.departamentos = data.results;
      })
  }
}
