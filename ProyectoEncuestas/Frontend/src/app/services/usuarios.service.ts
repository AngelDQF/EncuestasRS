import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { Observable, map } from 'rxjs';

@Injectable()
export class UsuariosService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.URL}/usuarios`).pipe(
      map((dataRaw: any) => {
        return dataRaw.results;
      })
    )
  }
  getUsuariosDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/usuarios/des`).pipe(
      map((dataRaw: any) => {
        return dataRaw.results;
      })
    )
  }
  getUsuariosTipos(): Observable<any> {
    return this.http.get(`${this.URL}/usuarios/tipos`).pipe(
      map((dataRaw: any) => {
        return dataRaw.results;
      })
    )
  }
  postUsuarios(body: any): Observable<any> {
    return this.http.post(`${this.URL}/usuarios`, body);
  }
}
