import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentosUsers } from '@models/encuesta/departamentos-users.interface';
import { EncuestasService } from '@serv/encuestas.service';
import jwt_decode from 'jwt-decode';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  tokenString: any;
  departamentos: any;
  bosques:any;
  selectDep: string;
  title: string = "Encuestas"
  //Declaracion de variables ngModel
  riosSelect:any;
  constructor(private encuestasModel: EncuestasService, private cookieToken:CookieService) { }
  ngOnInit(): void {
    this.tokenString = this.getDecodedAccessToken(this.token);
    this.ObtenerBosques();
    this.DepartamentosUser(this.tokenString.id);
  }
  token = this.cookieToken.get('token');
  riosChange(term:string){
    console.log(this.riosSelect);
  }
  DepartamentosUser(tok:any):void{
    this.encuestasModel.getDepartamentosUser$(tok).subscribe((response: DepartamentosUsers[]) => {
      this.departamentos = response;
      console.log();
    })
  }
  ObtenerBosques():void{
    this.encuestasModel.getTiposBosques$().subscribe((response: BosquesInterface[]) => {
      this.bosques = response;
      console.log();
    })
  }
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch(Error) {
      return null;
    }
  }
}
