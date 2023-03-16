import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { map, Observable } from 'rxjs';
import { CargosInterface } from '@models/administrar/junta/cargos.interface';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';

@Injectable()
export class JuntaService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }

  getCargos(): Observable<any> {
    return this.http.get(`${this.URL}/cargos`)
      .pipe(
        map(({results}: any) => {
          return results;
        })
      )
  }
  getCargo(id:number) {
    return this.http.get<CargosInterface>(`${this.URL}/cargos/${id}`)
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
}
