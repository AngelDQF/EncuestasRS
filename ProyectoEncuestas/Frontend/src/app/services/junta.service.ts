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
  getEjeByID(id:number): Observable<any> {
    const body={id};
    return this.http.post(`${this.URL}/ejes/buscar`, body).pipe(
      map(({results}: any) => {
        return results;
      })
    )
  }
  getEjesDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/ejes/desactivados`)
      .pipe(
        map(({results}: any) => {
          return results;
        })
      )
  }
  putEje(id:number,eje:string): Observable<any> {
    const body={id,eje}
    return this.http.put(`${this.URL}/ejes/editar`, body).pipe(
      map(({results}: any) => {
        return results;
      })
    )
  }
  postCargo(cargo: string, estado: string): Observable<any> {
    let body = {
      cargo,
      estado
    }
    return this.http.post(`${this.URL}/cargos`, body);
  }
  getGrados(): Observable<any> {
    return this.http.get(`${this.URL}/escolaridad`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getGradosDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/escolaridad/desactivados`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
}
