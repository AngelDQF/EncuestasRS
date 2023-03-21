import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {
  private URL = environment.api;
  constructor(private http:HttpClient) {}
  getDepartamentos(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/departamentos`)
      .pipe(
        map(({results}: any) => {
          return results;
        })
      )
  }
  getSearchDepartamentos$(term:string):Observable<any>{
    const body=[
      {"dep":term}
    ]
    console.log(body[0])
    console.log(term)
    return this.http.post(`${this.URL}/ubicaciones/departamentos/buscar`,body[0])
    .pipe(
      map(({results}: any) => {
        return results;
      })
    )
  }
  getMunicipios(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/municipios`)
      .pipe(
        map(({results}: any) => {
          return results;
        })
      )
  }
  getSearchMunicipios$(term:string):Observable<any>{
    const body=[
      {"mun":term}
    ]
    console.log(body[0])
    console.log(term)
    return this.http.post(`${this.URL}/ubicaciones/municipios/buscar`,body[0])
    .pipe(
      map(({results}: any) => {
        return results;
      })
    )
  }
  getAldeas(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/aldeas`)
      .pipe(
        map(({results}: any) => {
          return results;
        })
      )
  }
  getSearchAldeas$(term:string):Observable<any>{
    const body=[
      {"aldea":term}
    ]
    console.log(body[0])
    console.log(term)
    return this.http.post(`${this.URL}/ubicaciones/aldeas/buscar`,body[0])
    .pipe(
      map(({results}: any) => {
        return results;
      })
    )
  }
  getCaserios(): Observable<any> {
    return this.http.get(`${this.URL}/ubicaciones/caserios`)
      .pipe(
        map(({results}: any) => {
          return results;
        })
      )
  }
  getSearchCaserios$(term:string):Observable<any>{
    const body=[
      {"caserio":term}
    ]
    console.log(body[0])
    console.log(term)
    return this.http.post(`${this.URL}/ubicaciones/caserios/buscar`,body[0])
    .pipe(
      map(({results}: any) => {
        return results;
      })
    )
  }
}
