import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServiciosService {

  constructor(private http:HttpClient) { }
  getSerBasicos() {
    return this.http.get<ServiciosResponse>('http://localhost:8080/redsolidaria/servicios/locales')
  }
  getSerBasicosDesactivados() {
    return this.http.get<ServiciosResponse>('http://localhost:8080/redsolidaria/servicios/locales/desactivados')
  }
  getSerLocales() {
    return this.http.get<ServiciosResponse>('http://localhost:8080/redsolidaria/servicios/basicos')
  }
  getSerLocalesDesactivados() {
    return this.http.get<ServiciosResponse>('http://localhost:8080/redsolidaria/servicios/basicos/desactivados')
  }
}

export interface ServiciosResponse {
  results: Servicio[];
}
export interface Servicio{
  id: number
  servicio:string
  tipo: string
  estado: boolean
}
