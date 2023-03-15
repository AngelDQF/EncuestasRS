import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '@shared/environments/environment'

@Injectable()
export class FinanciamientosService {
  constructor(private http: HttpClient) { }
  getTiposFinanciamiento() {
    return this.http.get<TiposFinancimientoResponse>('http://'+environment.puerto+'/redsolidaria/financiamientos/tipos')
  }
  getTiposFinanciamientoDesactivados() {
    return this.http.get<TiposFinancimientoResponse>('http://'+environment.puerto+'/redsolidaria/financiamientos/tipos/desactivados')
  }
  getFuentesFinanciamiento() {
    return this.http.get<FuentesFinancimientoResponse>('http://'+environment.puerto+'/redsolidaria/financiamientos/fuentes')
  }
  getFuentesFinanciamientoDesactivados() {
    return this.http.get<FuentesFinancimientoResponse>('http://'+environment.puerto+'/redsolidaria/financiamientos/fuentes/desactivados')
  }
}
export interface TiposFinancimientoResponse {
  results: TipoFinancimiento[];
}
export interface TipoFinancimiento {
  id: number
  tipo: string
  estado: boolean
}
export interface FuentesFinancimientoResponse {
  results: FuenteFinancimiento[];
}
export interface FuenteFinancimiento {
  id: number
  fuente: string
  estado: boolean
}
