import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrganizacionesService {

  constructor(private http:HttpClient) { }
  getTiposOrganizacion() {
    return this.http.get<TiposOrganizacionResponse>('http://localhost:8080/redsolidaria/organizaciones/tipos')
  }
  getTiposOrganizacionDesactivados() {
    return this.http.get<TiposOrganizacionResponse>('http://localhost:8080/redsolidaria/organizaciones/tipos/desactivados')
  }
  getOrganizaciones() {
    return this.http.get<OrganizacionesResponse>('http://localhost:8080/redsolidaria/organizaciones')
  }
  getOrganizacionesDesactivados() {
    return this.http.get<OrganizacionesResponse>('http://localhost:8080/redsolidaria/organizaciones/desactivados')
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
