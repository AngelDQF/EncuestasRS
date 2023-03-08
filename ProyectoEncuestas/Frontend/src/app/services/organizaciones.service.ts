import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {puerto} from '../shared/utils'

@Injectable()
export class OrganizacionesService {

  constructor(private http:HttpClient) { }
  getTiposOrganizacion() {
    return this.http.get<TiposOrganizacionResponse>('http://'+puerto+'/redsolidaria/organizaciones/tipos')
  }
  getTiposOrganizacionDesactivados() {
    return this.http.get<TiposOrganizacionResponse>('http://'+puerto+'/redsolidaria/organizaciones/tipos/desactivados')
  }
  getOrganizaciones() {
    return this.http.get<OrganizacionesResponse>('http://'+puerto+'/redsolidaria/organizaciones')
  }
  getOrganizacionesDesactivados() {
    return this.http.get<OrganizacionesResponse>('http://'+puerto+'/redsolidaria/organizaciones/desactivados')
  }
}

export interface TiposOrganizacionResponse {
  results: TiposOrganizacion[];
}
export interface TiposOrganizacion{
  id: number
  tipo: string
  estado: boolean
}
export interface OrganizacionesResponse {
  results: Organizacion[];
}
export interface Organizacion{
  id: number
  org: string
  tipo: string
  estado: boolean
}
