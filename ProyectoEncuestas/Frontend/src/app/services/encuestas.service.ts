import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { puerto } from '@shared/utils';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  constructor(private http: HttpClient) { }
  getDepartamentosUser() {
    return this.http.get<UserDepartamentosResponse>('http://'+puerto+'/redsolidaria/financiamientos/tipos')
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
