import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-desactivar-user',
  templateUrl: './desactivar-user.component.html',
  styleUrls: ['../modals-desactivar.css', '../../../../app.component.css']
})
export class DesactivarUserComponent {
  usuarios: any;
  nombre: any;
  titulo:any
  constructor(public dialogoRef: MatDialogRef<DesactivarUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Array<any>, private userModel: UsuariosService) {
    this.obtenerUser(this.data[0]);
  }

  onClickNo(): void {
    this.dialogoRef.close();
  }
  desactivar() {
    try {
      if (this.data !== null) {
        this.userModel.putEstadoUsuario(this.data[0], this.data[2]).subscribe();
      }
      this.dialogoRef.close();
    } catch (error) {
      console.log(error);
    }
  }
  obtenerUser(id: number) {
    this.userModel.getUsuarioById(id).subscribe((data: UsersInterface) => {
      this.usuarios = data;
      this.nombre = this.usuarios[0].name;
    })
    this.titulo=this.data[1];
  }
}
