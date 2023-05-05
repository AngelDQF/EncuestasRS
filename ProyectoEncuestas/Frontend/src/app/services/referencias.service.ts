import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {

  constructor(private http: HttpClient) { }

  postDocumentos(file?:string,code?:string,name?:string,extension?:string):Observable<any> {
    let body={file,code,name,extension,systemName:'MesasSolidarias'};
    return this.http.post(`https://192.168.41.67/api/file/create`,body)
  }
}
