import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '@serv/usuarios.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersInterface } from '@models/usuarios/users.interface';
import { Router } from '@angular/router';
import { InfoComponent } from '@shared/components';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css', '../../../../app.component.css']
})
export class UsuariosComponent implements OnInit {
  public usersForm: any;
  public hide: boolean;
  public usuariosTipos: Array<UsersInterface> = [];
  constructor(private usuariosModel: UsuariosService, private fb: FormBuilder, private router: Router, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.usuariosModel.getUsuariosTipos().subscribe((data: UsersInterface[]) => {
      this.usuariosTipos = data;
    });
    this.initForm();
    this.hide = true;
  }
  initForm() {
    this.usersForm = this.fb.group({
      txtNombre: ['', [Validators.required]],
      txtApellido: ['', [Validators.required]],
      txtTelefono: ['', [Validators.required, Validators.minLength(8)]],
      txtDni: ['', [Validators.required, Validators.minLength(13)]],
      txtEmail: ['', [Validators.required, Validators.email]],
      txtContra: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(60)]],
      selectEstado: ['1', [Validators.required]],
      selectTipo: ['', [Validators.required, Validators.nullValidator]],
      selectSexo: ['', [Validators.required]],
    })
  }
  onSubmit() {
    try {
      let body = {
        nombre: (`${this.usersForm.value.txtNombre} ${this.usersForm.value.txtApellido}`),
        telefono: this.usersForm.value.txtTelefono,
        dni: this.usersForm.value.txtDni,
        correo: this.usersForm.value.txtEmail,
        contra: this.usersForm.value.txtContra,
        estado: this.usersForm.value.selectEstado,
        tipo: parseInt(this.usersForm.value.selectTipo),
        sexo: this.usersForm.value.selectSexo,
      }
      console.log(body)
      this.usuariosModel.postUsuarios(body).subscribe((data: any) => {
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.router.navigate(['/usuarios']);
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      })
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  refresh() {
    this.initForm();
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
