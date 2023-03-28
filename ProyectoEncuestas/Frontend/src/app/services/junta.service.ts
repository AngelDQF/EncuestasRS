import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { map, Observable } from 'rxjs';

@Injectable()
export class JuntaService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }

  getCargos(): Observable<any> {
    return this.http.get(`${this.URL}/cargos`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }

  getCargosDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/cargos/desactivados`)
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.results;
        })
      )
  }
  getEjes(): Observable<any> {
    return this.http.get(`${this.URL}/ejes`)
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.results;
        })
      )
  }
  getEjesDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/ejes/desactivados`)
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.results;
        })
      )
  }
  postEje$(eje: string, estado: string): Observable<any> {
    let body = {
      eje,
      estado
    }
    return this.http.post(`${this.URL}/ejes`, body)
  }
  postCargo$(cargo: string, estado: string): Observable<any> {
    let body = {
      cargo,
      estado
    }
    return this.http.post(`${this.URL}/cargos`, body);
  }
}
