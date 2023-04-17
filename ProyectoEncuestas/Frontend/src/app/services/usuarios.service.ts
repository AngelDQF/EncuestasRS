import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  getUsuarioEncuestas(id: number): Observable<any> {
    const body = {
      id: id
    }
    return this.http.post(`${this.URL}/administrar/encuestas`, body).pipe(
      map((dataRaw: any) => {
        return dataRaw.results
      })
    )
  }
  putEstadoUsuario(id: number, estado: number): Observable<any> {
    const body = { id, estado }
    return this.http.put(`${this.URL}/usuarios/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  putPassword(id: number, password: string): Observable<any> {
    let body = { id, password }
    return this.http.put(`${this.URL}/usuarios/editar/password`, body);
  }
  //Servicios para las Asignaciones de los usuarios
  getAsignaciones(id: number): Observable<any> {
    const body = { id };
    return this.http.post(`${this.URL}/usuarios/asig`, body).pipe(
      map((dataRaw: any) => {
        return dataRaw.results
      })
    )
  }
  postAsignaciones(id: number, mun: string): Observable<any> {
    const body = { id, mun, estado: 1 };
    return this.http.post(`${this.URL}/usuarios/asig/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getDepartamentos(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/departamentos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    );
  }
  getMunicipios(dep: string, id: number): Observable<any> {
    const body = { dep, id };
    return this.http.post(`${this.URL}/ubicaciones/asignar/mun`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getDepartamentosUser(id: number): Observable<any> {
    const body = { id };
    return this.http.post(`${this.URL}/encuestas/departamentos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    );
  }

  getMunicipiosUser(id: number, dep: string): Observable<any> {
      const body = { id, dep };
      return this.http.post(`${this.URL}/encuestas/municipios`, body).pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getEncuestasDepUser(id: string, idUser: number) {
    const body = { id, idUser };
    return this.http.post(`${this.URL}/administrar/encuestas/dep`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEncuestasMunUser(id: string, idUser: number) {
    const body = { id, idUser };
    return this.http.post(`${this.URL}/administrar/encuestas/mun`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}
