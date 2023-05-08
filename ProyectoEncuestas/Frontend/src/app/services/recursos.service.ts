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

  getBosque(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/naturales/bosques`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postBosque(bosque: string): Observable<any> {
    let body = { bosque, estado: 1 };
    return this.http.post(`${this.URL}/naturales/bosques/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putBosque(id: number, bosque: string): Observable<any> {
    let body = { id, bosque };
    return this.http.put(`${this.URL}/naturales/bosques/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putBosqueEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/naturales/bosques/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  getSuelo(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/naturales/suelos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postSuelo(suelo: string): Observable<any> {
    let body = { suelo, estado: 1 };
    return this.http.post(`${this.URL}/naturales/suelos/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putSuelo(id: number, suelo: string): Observable<any> {
    let body = { id, suelo };
    return this.http.put(`${this.URL}/naturales/suelos/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putSueloEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/naturales/suelos/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}