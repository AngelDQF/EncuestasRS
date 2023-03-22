import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentosUsers } from '@models/encuesta/departamentos-users.interface';
import { EncuestasService } from '@serv/encuestas.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  departamentos: any;
  selectDep: string;
  title: string = "Encuestas"
  constructor(private encuestasModel: EncuestasService) { }
  ngOnInit(): void {
    this.DepartamentosUser();
  }


  DepartamentosUser():void{
    const id=3;
    this.encuestasModel.getDepartamentosUser(id).subscribe((response: DepartamentosUsers[]) => {
      this.departamentos = response;
      console.log();
    })
  }
}
