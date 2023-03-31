import { Component } from '@angular/core';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-usuarios-desactivados',
  templateUrl: './usuarios-desactivados.html',
  styleUrls: ['./listar-usuarios.component.css','../../../../app.component.css']
})
export class UsuariosDeactivadosComponent {
  search='';
  desactivados: Array<UsersInterface> = [];
  constructor(private usuariosModel:UsuariosService) {
    this.usuariosModel.getUsuariosDesactivados().subscribe((data: UsersInterface[])=>{
      this.desactivados = data;
      })
  }
}
