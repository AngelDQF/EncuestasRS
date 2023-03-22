import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@shared/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EncuestasService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { }
  getEncuestas(): Observable<any> {
    return this.http.get(`${this.URL}/encuestas/listar`)
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
  getOrganizacion$():Observable<any> {
    return this.http.get(`${this.URL}/encuestas/org`).pipe(
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
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err => {
          reject(err);
        });
    });
  }
}
export interface UserDepartamentosResponse {
  results: Departamento[];
}
export interface Departamento {
  id: number
  tipo: string
  estado: boolean
}
export interface EncuestasResponse {
  results: Encuesta[];
}
export interface Encuesta {
  id: number
  departamento: string
  municipio: string
  aldea: string
  caserio: string
  address: string
  total_Hombres: number
  total_Mujeres: number
  total_Asistencia: number
  org: string
  rios: string
  cant_rio: string
  bosque: string
  tipo_bosque: string
  suelo: string
  tenencia: string
  mercado: string
  nivel_tec: string
  fecha: string
  usuario: string
}
