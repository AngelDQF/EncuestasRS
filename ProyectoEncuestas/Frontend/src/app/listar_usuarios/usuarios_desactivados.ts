import { Component } from '@angular/core';
import { UsuarioDesactivado, UsuariosDesactivadosResponse, UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-usuarios-desactivados',
  templateUrl: './usuarios_desactivados.html',
  styleUrls: ['./listar_usuarios.component.css','../app.component.css']
})
export class UsuariosDeactivadosComponent {
  desactivados: UsuarioDesactivado[] = [];
  constructor(private usuariosModel:UsuariosService) {
    this.usuariosModel.getUsuariosDesactivados().subscribe((data: UsuariosDesactivadosResponse)=>{
      this.desactivados = data.results;
      })
  }
}
