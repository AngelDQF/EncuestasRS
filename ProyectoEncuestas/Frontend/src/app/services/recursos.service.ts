import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RecursosService {

  constructor(private http: HttpClient) { }
  getBosques() {
    return this.http.get<BosquesResponse>('http://localhost:8080/redsolidaria/naturales/bosques')
  }
  getBosquesDesactivados() {
    return this.http.get<BosquesResponse>('http://localhost:8080/redsolidaria/naturales/bosques/desactivados')
  }
}
export interface BosquesResponse {
  results: Bosque[];
}
export interface Bosque {
  id: number
  tipo: string
  estado: boolean
}
