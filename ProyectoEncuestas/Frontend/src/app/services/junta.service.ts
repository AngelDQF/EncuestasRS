import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class JuntaService {
  constructor(private http: HttpClient) { }
  getEjes() {
    return this.http.get<EjesResponse>('http://localhost:8080/redsolidaria/ejes')
  }
}
export interface EjesResponse {
  results: Eje[];
}
export interface Eje {
  id: number
  eje: string
  estado: boolean
}
