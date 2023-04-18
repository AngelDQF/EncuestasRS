import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@shared/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable()
export class EncuestasService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }
  getEncuestas(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/listar`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getDepartamentosUser$(id: number): Observable<any> {
    const body = [
      { id }
    ];
    return this.http.post(`${this.URL}/encuestas/departamentos`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getMunicipiosUser$(id: number,dep:string): Observable<any> {
    const body = [
      { id,dep }
    ];
    return this.http.post(`${this.URL}/encuestas/municipios`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getAldeasUser$(id:string): Observable<any> {
    const body = [
      { id }
    ];
    return this.http.post(`${this.URL}/encuestas/aldeas`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getCaseriosUser$(id:string): Observable<any> {
    const body = [
      { id }
    ];
    return this.http.post(`${this.URL}/encuestas/caserios`, body[0]).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEstructuras(): Observable<any>  {
    return this.http.get(`${this.URL}/encuestas/estructuras`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEstados(): Observable<any>  {
    return this.http.get(`${this.URL}/encuestas/estados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTecnologico$(): Observable<any>  {
    return this.http.get(`${this.URL}/encuestas/nivel`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrganizaciones():Observable<any> {
    return this.http.get(`${this.URL}/encuestas/org`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrgLocales():Observable<any> {
    return this.http.get(`${this.URL}/encuestas/org/locales`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getSuelos$():Observable<any> {
    return this.http.get(`${this.URL}/encuestas/suelos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  //Junta Directiva
  getCargos(): Observable<any> {
    return this.http.get(`${this.URL}/cargos`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getGrados(): Observable<any> {
    return this.http.get(`${this.URL}/escolaridad`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getEjes(): Observable<any> {
    return this.http.get(`${this.URL}/ejes`)
      .pipe(
        map(({results}: any) => {
          return results;
        })
      )
  }
  //Organizaciones Sociales
  getOrganizacionesSociales$():Observable<any> {
    return this.http.get(`${this.URL}/encuestas/sociales`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getTiposBosques$(): Observable<any> {
    return this.http.get(`${this.URL}/naturales/bosques`).pipe(
      map(({ results }: any) => {
        return results;
      }
      ))
  }
}
