import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {puerto} from '@shared/utils'
@Injectable()
export class RequerimientosService {

  constructor(private http: HttpClient) { }
  getMercados() {
    return this.http.get<MercadosResponse>('http://'+puerto+'/redsolidaria/requerimientos/mercados')
  }
  getMercadosDesactivados() {
    return this.http.get<MercadosResponse>('http://'+puerto+'/redsolidaria/requerimientos/mercados/desactivados')
  }

  getUsosTierra() {
    return this.http.get<UsosTierraResponse>('http://'+puerto+'/redsolidaria/requerimientos/tierras/usos')
  }
  getUsosTierraDesactivados() {
    return this.http.get<UsosTierraResponse>('http://'+puerto+'/redsolidaria/requerimientos/tierras/usos/desactivados')
  }
  getTenenciaTierras() {
    return this.http.get<TenenciaTierrasResponse>('http://'+puerto+'/redsolidaria/requerimientos/tierras/tenencia')
  }
  getTenenciaTierrasDesactivados() {
    return this.http.get<TenenciaTierrasResponse>('http://'+puerto+'/redsolidaria/requerimientos/tierras/tenencia/desactivados')
  }
  getEstructuras() {
    return this.http.get<EstructurasResponse>('http://'+puerto+'/redsolidaria/requerimientos/estructuras')
  }
  getEstructurasDesactivados() {
    return this.http.get<EstructurasResponse>('http://'+puerto+'/redsolidaria/requerimientos/estructuras/desactivados')
  }
}
export interface MercadosResponse {
  results: Mercado[];
}
export interface Mercado {
  id: number
  mercado: string
  estado: boolean
}
export interface UsosTierraResponse {
  results: UsoTierra[];
}
export interface UsoTierra {
  id: number
  uso: string
  estado: boolean
}
export interface TenenciaTierrasResponse {
  results: TenenciaTierra[];
}
export interface TenenciaTierra {
  id: number
  tenencia: string
  estado: boolean
}
export interface EstructurasResponse {
  results: Estructura[];
}
export interface Estructura {
  id: number
  estructura: string
  estado: boolean
}
