import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { map, Observable } from 'rxjs';

@Injectable()
export class JuntaService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }

  getCargos(): Observable<any> {
    return this.http.get(`${this.URL}/cargos`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getCargoByID(id: number): Observable<any> {
    const body = { id }
    return this.http.post(`${this.URL}/cargos/buscar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getCargosDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/cargos/desactivados`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getEjes(): Observable<any> {
    return this.http.get(`${this.URL}/ejes`)
      .pipe(
        map((dataRaw: any) => {
          return dataRaw.results;
        })
      )
  }
  getEjeByID(id: number): Observable<any> {
    const body = { id };
    return this.http.post(`${this.URL}/ejes/buscar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getEjesDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/ejes/desactivados`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  putEje(id: number, eje: string): Observable<any> {
    const body = { id, eje }
    return this.http.put(`${this.URL}/ejes/editar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postCargo(cargo: string): Observable<any> {
    let body = {
      cargo,
      estado: 1
    }
    return this.http.post(`${this.URL}/cargos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    );
  }
  putCargo(id: number, cargo: string): Observable<any> {
    let body = { id, cargo };
    return this.http.put(`${this.URL}/cargos`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    );
  }
  getGrados(): Observable<any> {
    return this.http.get(`${this.URL}/escolaridad`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getEscolaridadByID(id: number): Observable<any> {
    const body = { id };
    return this.http.post(`${this.URL}/escolaridad/buscar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getGradosDesactivados(): Observable<any> {
    return this.http.get(`${this.URL}/escolaridad/desactivados`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  postGrado$(grado: string): Observable<any> {
    const body = { grado, estado: 1 }
    return this.http.post(`${this.URL}/escolaridad/agregar`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putGradoNombre$(id: number, grado: string): Observable<any> {
    const body = { id, grado }
    return this.http.put(`${this.URL}/escolaridad/editar/nombre`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putGradoEstado(id: number, estado: boolean): Observable<any> {
    const body = { id, estado }
    return this.http.put(`${this.URL}/escolaridad/editar/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  putCargoEstado(id: number, estado: boolean): Observable<any> {
    const body = { id, estado };
    return this.http.put(`${this.URL}/cargos/estado`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}
