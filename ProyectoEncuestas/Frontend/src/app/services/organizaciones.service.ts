import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { map, Observable } from 'rxjs';

@Injectable()
export class OrganizacionesService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }
  getTiposOrganizacion(): Observable<any> {
    return this.http.get(`${this.URL}/organizaciones/tipos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTipoOrganizacionByID(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/organizaciones/tipos/buscar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrganizaciones(): Observable<any> {
    return this.http.get(`${this.URL}/organizaciones`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrganizacionByID(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/organizaciones/buscar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrganizacionesDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/organizaciones/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postOrganizacion(tipo: number, social: boolean, org: string): Observable<any> {
    let body = { tipo, social, org, estado: 1 };
    return this.http.post(`${this.URL}/organizaciones`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postTipoOrganizacion(tipo: number): Observable<any> {
    let body = { tipo, estado: 1 };
    return this.http.post(`${this.URL}/organizaciones/tipos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putOrganizacion(id: number, org: string): Observable<any> {
    let body = { id, org };
    return this.http.put(`${this.URL}/organizaciones`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putOrganizacionDatos(id: number, tipo: number, social: boolean): Observable<any> {
    let body = { id, tipo, social };
    return this.http.put(`${this.URL}/organizaciones/datos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putOrganizacionEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/organizaciones/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putTipoOrganizacion(id: number, tipo: string): Observable<any> {
    let body = { id, tipo };
    return this.http.put(`${this.URL}/organizaciones/tipos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putTipoOrganizacionEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/organizaciones/tipos/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

}