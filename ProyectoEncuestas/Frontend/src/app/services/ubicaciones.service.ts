import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }

  getDepartamentos(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/departamentos`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getMunicipios$(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/municipios`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getAldeas(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/aldeas`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getCaserios(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/caserios`)
      .pipe(
        map(({ results }: any) => {
          return results;
        })
      )
  }
  getMunicipiosByDep$(id:number): Observable<any> {
    return this.http.post(`${this.URL}/ubicaciones/departamentos/mun`,{id}).pipe(
      map(({results}:any)=>{
        return results;
      })
    )
  }
}
