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
}
