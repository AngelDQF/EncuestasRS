import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RequerimientosService {

  constructor(private http: HttpClient) { }
  getMercados() {
    return this.http.get<MercadosResponse>('http://localhost:8080/redsolidaria/financiamientos/tipos')
  }
  getMercadosDesactivados() {
    return this.http.get<MercadosResponse>('http://localhost:8080/redsolidaria/financiamientos/tipos')
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
