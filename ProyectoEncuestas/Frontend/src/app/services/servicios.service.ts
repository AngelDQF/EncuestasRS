import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '@shared/environments/environment'
import { Observable, map } from 'rxjs';

@Injectable()
export class ServiciosService {
  private readonly URL = environment.api;

  constructor(private http:HttpClient) { }
  getSerBasicos():Observable<any> {
    return this.http.get(`${this.URL}/servicios/locales`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSerBasicosDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/servicios/locales/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSerLocales():Observable<any> {
    return this.http.get(`${this.URL}/servicios/basicos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSerLocalesDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/servicios/basicos/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putEstadoSerLocal$(id:number,est:string):Observable<any>{
    const body = [
      { id,est }
    ];
    return this.http.post(`${this.URL}/encuestas/aldeas`, body[0]);
  }
}
