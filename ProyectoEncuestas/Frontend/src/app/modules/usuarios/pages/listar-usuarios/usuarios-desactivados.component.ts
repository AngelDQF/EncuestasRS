import { Component } from '@angular/core';
import { UsuarioDesactivado, UsuariosDesactivadosResponse, UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-usuarios-desactivados',
  templateUrl: './usuarios-desactivados.html',
  styleUrls: ['./listar-usuarios.component.css','../../../../app.component.css']
})
export class UsuariosDeactivadosComponent {
  desactivados: UsuarioDesactivado[] = [];
  constructor(private usuariosModel:UsuariosService) {
    this.usuariosModel.getUsuariosDesactivados().subscribe((data: UsuariosDesactivadosResponse)=>{
      this.desactivados = data.results;
      })
  }
}
