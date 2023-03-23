import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '@shared/environments/environment'
import { Observable } from 'rxjs';

@Injectable()
export class ServiciosService {
  private readonly URL = environment.api;

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
  putEstadoSerLocal$(id:number,est:string):Observable<any>{
    const body = [
      { id,est }
    ];
    return this.http.post(`${this.URL}/encuestas/aldeas`, body[0]);
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
