import { Component } from '@angular/core';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../../../../app.component.css']
})
export class ListarUsuariosComponent {
  usuarios: Array<UsersInterface>=[] = [];
  public page!:number;
  constructor(private usuariosModel: UsuariosService) {
    this.usuariosModel.getUsuarios().subscribe((data:UsersInterface[]) => {
      this.usuarios = data;
    })
  }
}
