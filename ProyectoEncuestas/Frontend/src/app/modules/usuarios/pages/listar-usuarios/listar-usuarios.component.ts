import { Component } from '@angular/core';
import { Usuario, UsuariosResponse, UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../../../../app.component.css']
})
export class ListarUsuariosComponent {
  usuarios: Usuario[] = [];
  constructor(private usuariosModel: UsuariosService) {
    this.usuariosModel.getUsuarios().subscribe((data: UsuariosResponse) => {
      this.usuarios = data.results;
    })

  }
}
