import { TemplatePortal } from '@angular/cdk/portal';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-restablecer-password',
  templateUrl: './restablecer-password.component.html',
  styleUrls: ['./restablecer-password.component.css', '../../../../app.component.css']
})
export class RestablecerPasswordComponent implements OnInit {
  frmCambio: FormGroup;
  hide: boolean;
  hide2: boolean;
  usuarios: any;
  nombre: any;
  eye: boolean;
  eyeOff: boolean;
  eye2: boolean;
  eyeOff2: boolean;
  constructor(public dialogoRef: MatDialogRef<RestablecerPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private userModel: UsuariosService) {
    this.obtenerUser(this.data[0]);
  }
  ngOnInit(): void {
    this.hide = true;
    this.hide2 = true;
    this.eye = false;
    this.eyeOff = true;
    this.eye2 = false;
    this.eyeOff2 = true;
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  onRestablecer(): void {
  }
  cambio() {
    if (this.hide) {
      this.hide = false;
      this.eye = true;
      this.eyeOff = false;
    } else {
      this.hide = true;
      this.eye = false;
      this.eyeOff = true;
    }
  }
  cambioConfirmar() {
    if (this.hide2) {
      this.hide2 = false;
      this.eye2 = true;
      this.eyeOff2 = false;
    } else {
      this.hide2 = true;
      this.eye2 = false;
      this.eyeOff2 = true;
    }
  }
  obtenerUser(id: number) {
    this.userModel.getUsuarioById(id).subscribe((data: UsersInterface) => {
      this.usuarios = data;
      this.nombre = this.usuarios[0].name;
    })
  }
}
