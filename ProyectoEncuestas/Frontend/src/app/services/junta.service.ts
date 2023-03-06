import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JuntaService {
  constructor(private http: HttpClient) { }
  getEjes() {
    return this.http.get<EjesResponse>('http://localhost:8080/redsolidaria/ejes')
  }
  getCargos() {
    return this.http.get<CargosResponse>('http://localhost:8080/redsolidaria/cargos')
  }
}
export interface EjesResponse {
  results: Eje[];
}
export interface Eje {
  id: number
  eje: string
  estado: boolean
}
export interface CargosResponse {
  results: Cargo[];
}
export interface Cargo {
  id: number
  cargo: string
  estado: boolean
}
