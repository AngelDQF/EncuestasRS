import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { Observable, map } from 'rxjs';

@Injectable()
export class RecursosService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient) { }
  getBosques(): Observable<any> {
    return this.http.get(`${this.URL}/naturales/bosques`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getBosquesDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/naturales/bosques/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSuelos(): Observable<any> {
    return this.http.get(`${this.URL}/naturales/suelos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSuelosDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/naturales/suelos/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}