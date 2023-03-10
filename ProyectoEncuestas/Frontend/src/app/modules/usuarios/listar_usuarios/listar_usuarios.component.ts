import { Component } from '@angular/core';
import { Usuario, UsuariosResponse, UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar_usuarios.component.html',
  styleUrls: ['./listar_usuarios.component.css','../../../app.component.css']
})
export class ListarComponent {
  usuarios: Usuario[] = [];
  constructor(private usuariosModel:UsuariosService) {
    this.usuariosModel.getUsuarios().subscribe((data: UsuariosResponse)=>{
      this.usuarios = data.results;
      })
  }
}
