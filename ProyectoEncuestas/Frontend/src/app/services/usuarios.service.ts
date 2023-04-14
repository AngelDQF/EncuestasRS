import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { CookieService } from 'ngx-cookie-service';
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
  getUsuarioById(id: number): Observable<any> {
    const body = {
      id: id
    }
    return this.http.post(`${this.URL}/usuarios/buscar`, body).pipe(
      map((dataRaw: any) => {
        return dataRaw.results
      })
    )
  }
  putEstadoUsuario(id: number, estado: number): Observable<any> {
    const body = { id, estado }
    return this.http.put(`${this.URL}/usuarios/editar/estado`, body);
  }
  putPassword(id: number, password: string): Observable<any> {
    let body = { id, password }
    return this.http.put(`${this.URL}/usuarios/editar/password`, body);
  }
  //Servicios para las Asignaciones de los usuarios
  getAsignaciones(id:number):Observable<any>{
    const body={id};
    return this.http.post(`${this.URL}/usuarios/asig`,body).pipe(
      map((dataRaw:any)=>{
        return dataRaw.results
      })
    )
  }
  getDepartamentos():Observable<any>{
    return this.http.get(`${this.URL}/ubicaciones/departamentos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    );
  } 
  getMunicipios(id:string):Observable<any>{
    const body={id};
    return this.http.post(`${this.URL}/ubicaciones/departamentos/mun`,body).pipe(
      map(({results}:any)=>{
        return results;
      })
    )
  }
}
