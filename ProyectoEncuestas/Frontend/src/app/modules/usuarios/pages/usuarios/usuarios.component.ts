import { Component } from '@angular/core';
import { UsuariosService, UsuariosTiposResponse, UsuarioTipo } from '@serv/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css','../../../../app.component.css']
})
export class UsuariosComponent {
  usuariosTipos: UsuarioTipo[] = [];
  constructor(private usuariosTiposModel:UsuariosService) {
    this.usuariosTiposModel.getUsuariosTipos().subscribe((data: UsuariosTiposResponse)=>{
      this.usuariosTipos = data.results;
      })
  }
}
