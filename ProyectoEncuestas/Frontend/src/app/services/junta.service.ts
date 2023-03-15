import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '@shared/environments/environment'

@Injectable()
export class JuntaService {
  constructor(private http: HttpClient) { }
  getEjes() {
    return this.http.get<EjesResponse>('http://'+environment.puerto+'/redsolidaria/ejes')
  }
  getEjesDesactivados() {
    return this.http.get<EjesResponse>('http://'+environment.puerto+'/redsolidaria/ejes/desactivados')
  }
  getCargos() {
    return this.http.get<CargosResponse>('http://'+environment.puerto+'/redsolidaria/cargos')
  }
  getCargosDesactivados() {
    return this.http.get<CargosResponse>('http://'+environment.puerto+'/redsolidaria/cargos/desactivados')
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
