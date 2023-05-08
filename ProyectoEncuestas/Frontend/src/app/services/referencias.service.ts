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
  getReferenciasActas(): Observable<any>{
    return this.http.get(`${this.URLMSol}/referencias/actas`).pipe(
      map(({ results }: any)=>{
        return results;
      })
    )
  }
  getReferenciasDNI(): Observable<any>{
    return this.http.get(`${this.URLMSol}/referencias/junta`).pipe(
      map(({ results }: any)=>{
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
  getDocumento(uid: string): Observable<any> {
    return this.http.get(`${this.BaseURLApiDocument}/byfilter?code=${uid}`).pipe(
      map(data => {
        return data;
      })
    )
  }
  postReferencia(uid: string, name: string, ext: any, tipo: number, id: number): Observable<any> {
    let body = { uid, name, ext, tipo, id };
    return this.http.post(`${this.URLMSol}/referencias`, body);
  }
  getReferencias(): Observable<any> {
    return this.http.get(`${this.URLMSol}/referencias`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}
