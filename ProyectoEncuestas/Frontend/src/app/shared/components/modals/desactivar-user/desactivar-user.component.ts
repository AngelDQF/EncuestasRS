import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-desactivar-user',
  templateUrl: './desactivar-user.component.html',
  styleUrls: ['../modals.css', '../../../../app.component.css']
})
export class DesactivarUserComponent implements OnInit {
  usuarios: any;
  nombre: any;
  titulo:any
  constructor(public dialogoRef: MatDialogRef<DesactivarUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Array<any>, private userModel: UsuariosService,private dialog:MatDialog) {
  }
  ngOnInit(): void {
    this.obtenerUser(this.data[0]);
  }

  onClickNo(): void {
    this.dialogoRef.close();
  }
  desactivar() {
    try {
      if (this.data !== null) {
        this.userModel.putEstadoUsuario(this.data[0], this.data[2]).subscribe(data=>{
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      }
      this.dialogoRef.close();
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  obtenerUser(id: number) {
    this.userModel.getUsuarioById(id).subscribe((data: UsersInterface) => {
      this.usuarios = data;
      this.nombre = this.usuarios[0].name;
    })
    this.titulo=this.data[1];
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
    } catch (error) {
      console.log(error);
    }
  }
}
