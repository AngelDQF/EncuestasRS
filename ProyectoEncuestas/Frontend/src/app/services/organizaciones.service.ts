import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { map, Observable } from 'rxjs';

@Injectable()
export class OrganizacionesService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }
  getTiposOrganizacion():Observable<any> {
    return this.http.get(`${this.URL}/organizaciones/tipos`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }

  getOrganizaciones():Observable<any> {
    return this.http.get(`${this.URL}/organizaciones`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
  getOrganizacionesDesactivados():Observable<any> {
    return this.http.get(`${this.URL}/organizaciones/desactivados`).pipe(
      map(({ results }: any) => {
        return results;
      })
    )
  }
}