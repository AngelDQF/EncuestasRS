import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '@serv/usuarios.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersInterface } from '@models/usuarios/users.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css', '../../../../app.component.css']
})
export class UsuariosComponent implements OnInit {
  public usersForm: any;

  public usuariosTipos: Array<UsersInterface> = [];
  constructor(private usuariosModel: UsuariosService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.usuariosModel.getUsuariosTipos().subscribe((data: UsersInterface[]) => {
      this.usuariosTipos = data;
    });
    this.initForm();
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
    this.usuariosModel.postUsuarios(body).subscribe()
  }
  refresh() {
    this.initForm();
  }
}
