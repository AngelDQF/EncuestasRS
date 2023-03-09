import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {puerto} from '@shared/utils'

@Injectable()
export class UsuariosService {

  constructor(private http:HttpClient) { }

  getUsuarios(){
    return this.http.get<UsuariosResponse>('http://'+puerto+'/redsolidaria/usuarios')
  }
  getUsuariosDesactivados(){
    return this.http.get<UsuariosDesactivadosResponse>('http://'+puerto+'/redsolidaria/usuarios/des')
  }
  getUsuariosTipos() {
    return this.http.get<UsuariosTiposResponse>('http://'+puerto+'/redsolidaria/usuarios/tipos')
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
