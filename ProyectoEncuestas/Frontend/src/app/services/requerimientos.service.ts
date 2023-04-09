import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '@shared/environments/environment'
import { Observable, map } from 'rxjs';
@Injectable()
export class RequerimientosService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) { }
  getMercados():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/mercados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getMercadosDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/mercados/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getUsosTierra():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/tierras/usos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getUsosTierraDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/tierras/usos/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTenenciaTierras():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/tierras/tenencia`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTenenciaTierrasDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/tierras/tenencia/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEstructuras():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/estructuras`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEstructurasDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/requerimientos/estructuras/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}
