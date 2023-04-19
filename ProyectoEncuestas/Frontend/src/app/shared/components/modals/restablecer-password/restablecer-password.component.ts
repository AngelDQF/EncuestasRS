import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-restablecer-password',
  templateUrl: './restablecer-password.component.html',
  styleUrls: ['./restablecer-password.component.css', '../../../../app.component.css']
})
export class RestablecerPasswordComponent implements OnInit {
  frmCambio: any;
  hide: boolean;
  validacion: boolean;
  hide2: boolean;
  usuarios: any;
  nombre: any;
  eye: boolean;
  eyeOff: boolean;
  eye2: boolean;
  eyeOff2: boolean;
  idUser: number;
  constructor(public dialogoRef: MatDialogRef<RestablecerPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>,private dialog:MatDialog, private userModel: UsuariosService, private fb: FormBuilder) {  }
  ngOnInit(): void {
    this.obtenerUser(this.data[0]);
    this.hide = true;
    this.hide2 = true;
    this.eye = false;
    this.eyeOff = true;
    this.eye2 = false;
    this.eyeOff2 = true;
    this.frmCambio = this.initForm();
    this.validacion = false;
    this.idUser = this.data[0]
  }
  initForm(): FormGroup {
    return this.fb.group({
      txtContra: ["", [Validators.required, Validators.minLength(8),Validators.maxLength(60)]],
      txtCambio: ["", [Validators.required, Validators.minLength(8),Validators.maxLength(60)]],
    });
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  onRestablecer(): void {
    try {
      const { txtContra, txtCambio } = this.frmCambio.value;
      if (txtContra !== txtCambio) {
        this.validacion = true
        this.mensaje("Advertencia","Las contraseñas no coinciden",1)
      } else {
        this.userModel.putPassword(this.idUser, txtContra).subscribe((data:any)=>{
            if (data.estado==2){
              this.mensaje("Información",data.mensaje,2);
            }
        });
        this.dialogoRef.close();
      }
    } catch (error) {
      this.mensaje("Error",`${error}`,3)
    }
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
