import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {puerto} from '@shared/utils'

@Injectable()
export class RecursosService {

  constructor(private http: HttpClient) { }
  getBosques() {
    return this.http.get<NaturalesResponse>('http://'+puerto+'/redsolidaria/naturales/bosques')
  }
  getBosquesDesactivados() {
    return this.http.get<NaturalesResponse>('http://'+puerto+'/redsolidaria/naturales/bosques/desactivados')
  }
  getSuelos() {
    return this.http.get<NaturalesResponse>('http://'+puerto+'/redsolidaria/naturales/suelos')
  }
  getSuelosDesactivados() {
    return this.http.get<NaturalesResponse>('http://'+puerto+'/redsolidaria/naturales/suelos/desactivados')
  }
}
export interface NaturalesResponse {
  results: Natural[];
}
export interface Natural {
  id: number
  tipo: string
  estado: boolean
}
