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

  getMercado(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/mercados`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postMercado(mercado: string): Observable<any> {
    let body = { mercado, estado: 1 };
    return this.http.post(`${this.URL}/mercados/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putMercado(id: number, mercado: string): Observable<any> {
    let body = { id, mercado };
    return this.http.put(`${this.URL}/mercados/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putMercadoEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/mercados/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  getUsoTierra(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/tierras/usos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postUsoTierra(uso: string): Observable<any> {
    let body = { uso, estado: 1 };
    return this.http.post(`${this.URL}/tierras/usos/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putUsoTierra(id: number, uso: string): Observable<any> {
    let body = { id, uso };
    return this.http.put(`${this.URL}/tierras/usos/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putUsoTierraEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/tierras/usos/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEstructura(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/estructuras`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postEstructura(estructura: string): Observable<any> {
    let body = { estructura, estado: 1 };
    return this.http.post(`${this.URL}/estructuras/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putEstructura(id: number, estructura: string): Observable<any> {
    let body = { id, estructura };
    return this.http.put(`${this.URL}/estructuras/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putEstructuraEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/estructuras/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  getTenenciaTierra(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URL}/tierras/tenencia`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postTenenciaTierra(tenencia: string): Observable<any> {
    let body = { tenencia, estado: 1 };
    return this.http.post(`${this.URL}/tierras/tenencia/crear`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putTenenciaTierra(id: number, tenencia: string): Observable<any> {
    let body = { id, tenencia };
    return this.http.put(`${this.URL}/tierras/tenencia/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putTenenciaTierraEstado(id: number, estado: boolean): Observable<any> {
    let body = { id, estado };
    return this.http.put(`${this.URL}/tierras/tenencia/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}
