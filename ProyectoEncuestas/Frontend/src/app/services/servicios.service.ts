import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '@shared/environments/environment'

@Injectable()
export class ServiciosService {

  constructor(private http:HttpClient) { }
  getSerBasicos() {
    return this.http.get<ServiciosResponse>('http://'+environment.puerto+'/redsolidaria/servicios/locales')
  }
  getSerBasicosDesactivados() {
    return this.http.get<ServiciosResponse>('http://'+environment.puerto+'/redsolidaria/servicios/locales/desactivados')
  }
  getSerLocales() {
    return this.http.get<ServiciosResponse>('http://'+environment.puerto+'/redsolidaria/servicios/basicos')
  }
  getSerLocalesDesactivados() {
    return this.http.get<ServiciosResponse>('http://'+environment.puerto+'/redsolidaria/servicios/basicos/desactivados')
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
