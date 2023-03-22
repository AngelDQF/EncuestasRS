import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@shared/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  private readonly URL = environment.api;   

  constructor(private http: HttpClient) { }
  getEncuestas():Observable<any>  {
    return this.http.get(`${this.URL}/encuestas/listar`)
  }
  getDepartamentosUser(id:number):Observable<any> {
    const body=[
      {id}
    ];
    console.log(body[0]);
    return this.http.post(`${this.URL}/encuestas/departamentos`,body[0]).pipe(
      map(({results}: any) => {
        return results;
      })
    )
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
  id: number
  departamento: string
  municipio: string
  aldea: string
  caserio: string
  address: string
  total_Hombres: number
  total_Mujeres: number
  total_Asistencia: number
  org: string
  rios: string
  cant_rio: string
  bosque: string
  tipo_bosque: string
  suelo: string
  tenencia: string
  mercado: string
  nivel_tec: string
  fecha: string
  usuario: string
}
