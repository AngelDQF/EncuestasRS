import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@shared/environments/environment'
import { Observable } from 'rxjs';

@Injectable()
export class UsuariosService {
  private URL = environment.api;
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<any> {
    return this.http.get(`${this.URL}/usuarios`)
  }
  getUsuariosDesactivados() {
    return this.http.get<UsuariosDesactivadosResponse>('http://' + environment.puerto + '/redsolidaria/usuarios/des')
  }
  getUsuariosTipos() {
    return this.http.get<UsuariosTiposResponse>('http://' + environment.puerto + '/redsolidaria/usuarios/tipos')
  }
}
export interface UsuariosResponse {
  results: Usuario[];
}
export interface Usuario {
  id: number
  name: string
  tel: string
  dni: string
  email: string
  creacion: string
  cambio: string
  estado: string
  tipo: string
  sexo: string
}
export interface UsuariosDesactivadosResponse {
  results: UsuarioDesactivado[];
}
export interface UsuarioDesactivado {
  id: number
  name: string
  tel: string
  dni: string
  email: string
  creado: string
  cambio: string
  tipo: string
  sexo: string
  estado: string
}
export interface UsuariosTiposResponse {
  results: UsuarioTipo[];
}
export interface UsuarioTipo {
  id: number
  tipo: string
  estado: boolean
}
