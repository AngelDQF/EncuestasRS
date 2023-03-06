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

}

export interface TiposOrganizacionResponse {
  results: TiposOrganizacion[];
}
export interface TiposOrganizacion{
  id: number
  tipo: string
  estado: boolean
}
