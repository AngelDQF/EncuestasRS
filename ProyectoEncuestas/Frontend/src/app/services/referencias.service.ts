import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {
  private readonly URLMSol = environment.api;
  private readonly BaseURLApiDocument = environment.apiDocuments;
  constructor(private http: HttpClient) { }
  getReferenciasActas(): Observable<any> {
    return this.http.get(`${this.URLMSol}/referencias/actas`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getReferenciasActasByDep(id: number): Observable<any> {
    let body = { id };
    return this.http.post(`${this.URLMSol}/referencias/actas/departamento`, body).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getReferenciasDNI(): Observable<any> {
    return this.http.get(`${this.URLMSol}/referencias/junta`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  postDocumentos(file?: string, code?: string, name?: string, extension?: string): Observable<any> {
    let body = { file, code, name, extension, systemName: 'MesasSolidarias' };
    return this.http.post(`${this.BaseURLApiDocument}/create`, body).pipe(
      map(data => {
        return data
      })
    )
  }
  putDocumento(file: string, code: string, name: string): Observable<any> {
    let body = { file, code, name };
    return this.http.put(`${this.BaseURLApiDocument}/update`, body).pipe(
      map(data => {
        return data
      })
    )
  }
  getDocumento(uid: string): Observable<any> {
    return this.http.get(`${this.BaseURLApiDocument}/byfilter?code=${uid}`).pipe(
      map(({ value }: any) => {
        return value;
      })
    )
  }
  getVerificarDoc(uid:string): Observable<any> {
    return this.http.get(`${this.BaseURLApiDocument}/byfilter?code=${uid}`).pipe(
      map(({ isSuccess }: any) => {
        return isSuccess;
      })
    )
  }
  postReferencia(uid: string, name: string, ext: any, tipo: number, id: number): Observable<any> {
    let body = { uid, name, ext, tipo, id };
    return this.http.post(`${this.URLMSol}/referencias`, body).pipe(
      map(({results}:any)=>{
        return results;
      })
    );
  }
  postReferenciaJunta(miembro: number, uid: string, name: string, ext: string, tipo: number, id: number): Observable<any> {
    let body = { miembro, uid, name, ext, tipo, id };
    return this.http.post(`${this.URLMSol}/referencias/junta`, body);
  }
  // getReferenciasDNI(): Observable<any> {
  //   return this.http.get(`${this.URLMSol}/referencias/junta`).pipe(
  //     map(({ results }: any) => {
  //       return results;
  //     })
  //   )
  // }
}
