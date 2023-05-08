import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { Observable, map } from 'rxjs';

@Injectable()
export class ServiciosService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }
  getSerBasicos(): Observable<any> {
    return this.http.get(`${this.URL}/servicios/basicos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSerBasicosDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/servicios/basicos/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSerLocales(): Observable<any> {
    return this.http.get(`${this.URL}/servicios/locales`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSerLocalesDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/servicios/locales/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getServicio(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/servicios`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postServicio(tipo: number, servicio: string): Observable<any> {
    let body = { tipo, servicio, estado: 1 };
    return this.http.post(`${this.URL}/servicios/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putServicio(id: number, servicio: string, tipo: number): Observable<any> {
    let body = { id, servicio, tipo };
    return this.http.put(`${this.URL}/servicios/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putTipoServicio(id: number, tipo: number): Observable<any> {
    let body = { id, tipo };
    return this.http.put(`${this.URL}/servicios/editar/tipo`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putServicioEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/servicios/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}
