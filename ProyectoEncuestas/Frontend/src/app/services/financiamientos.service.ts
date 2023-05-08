import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '@shared/environments/environment'
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable()
export class FinanciamientosService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }
  getTiposFinanciamiento():Observable<any> {
    return this.http.get(`${this.URL}/financiamientos/tipos`)  .pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTiposFinanciamientoDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/financiamientos/tipos/desactivados`)  .pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getFuentesFinanciamiento():Observable<any> {
    return this.http.get(`${this.URL}/financiamientos/fuentes`)  .pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getFuentesFinanciamientoDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/financiamientos/fuentes/desactivados`)  .pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  getFuenteFin(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/fuentes`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postFuenteFin(fuente: string): Observable<any> {
    let body = { fuente, estado: 1 };
    return this.http.post(`${this.URL}/fuentes/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putFuenteFin(id: number, fuente: string): Observable<any> {
    let body = { id, fuente };
    return this.http.put(`${this.URL}/fuentes/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putFuenteFinEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/fuentes/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  getTipoFin(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/tipos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postTipoFin(tipo: string): Observable<any> {
    let body = { tipo, estado: 1 };
    return this.http.post(`${this.URL}/tipos/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putTipoFin(id: number, tipo: string): Observable<any> {
    let body = { id, tipo };
    return this.http.put(`${this.URL}/tipos/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putTipoFinEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/tipos/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}
