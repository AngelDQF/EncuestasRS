import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { puerto } from '@shared/utils';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  constructor(private http: HttpClient) { }
  getEncuestas(){
    return this.http.get<EncuestasResponse>('http://' + puerto + '/redsolidaria/encuestas')
  }
  getDepartamentosUser() {
    return this.http.get<UserDepartamentosResponse>('http://' + puerto + '/redsolidaria/financiamientos/tipos')
  }
}
export interface UserDepartamentosResponse {
  results: Departamento[];
}
export interface Departamento {
  id: number
  tipo: string
  estado: boolean
}
export interface EncuestasResponse {
  results: Encuesta[];
}
export interface Encuesta {
  id:number
  departamento:string
  municipio:string
  aldea:string
  caserio:string
  address:string
  total_Hombres:number
  total_Mujeres:number
  total_Asistencia:number
  org:string
  rios:string
  cant_rio:string
  bosque:string
  tipo_bosque:string
  suelo:string
  tenencia:string
  mercado:string
  nivel_tec:string
  fecha:string
  usuario:string
}
