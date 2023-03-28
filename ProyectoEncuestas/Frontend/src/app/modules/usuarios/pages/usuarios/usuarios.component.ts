import { Component,OnInit } from '@angular/core';
import { UsuariosService, UsuariosTiposResponse, UsuarioTipo } from '@serv/usuarios.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css', '../../../../app.component.css']
})
export class UsuariosComponent implements OnInit {
  usersForm: FormGroup;


  usuariosTipos: UsuarioTipo[] = [];
  constructor(private usuariosModel: UsuariosService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.usuariosModel.getUsuariosTipos().subscribe((data: UsuariosTiposResponse) => {
      this.usuariosTipos = data.results;
    })
    this.initForm();
  }
  initForm() {
    this.usersForm=this.fb.group({
      txtNombre: ['', Validators.required],
      txtApellido: ['', Validators.required],
      txtTelefono: ['', Validators.required],
      txtDni: ['', Validators.required],
      txtEmail: ['', Validators.required],
      txtContra: ['', Validators.required],
      selectEstado: ['1', Validators.required],
      selectTipo: ['', Validators.required],
      selectSexo: ['', Validators.required],
    })
  }
  onSubmit(){
    let body={
      nombre: (`${this.usersForm.value.txtNombre} ${this.usersForm.value.txtApellido}`),
      telefono: this.usersForm.value.txtTelefono,
      dni: this.usersForm.value.txtDni,
      correo: this.usersForm.value.txtEmail,
      contra: this.usersForm.value.txtContra,
      estado: this.usersForm.value.selectEstado,
      tipo: this.usersForm.value.selectTipo,
      sexo: this.usersForm.value.selectSexo,
    }
    this.usuariosModel.postUsuarios(body).subscribe((data: any) => {
      console.log(data);
    })
  }
}
