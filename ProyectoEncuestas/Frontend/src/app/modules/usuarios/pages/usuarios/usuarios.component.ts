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
  constructor(private usuariosTiposModel: UsuariosService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.usuariosTiposModel.getUsuariosTipos().subscribe((data: UsuariosTiposResponse) => {
      this.usuariosTipos = data.results;
    })
  }
  initForm() {
    this.usersForm=this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      dni: ['', Validators.required],
      email: ['', Validators.required],
      contra: ['', Validators.required],
      estado: ['', Validators.required],
      tipo: ['', Validators.required],
      sexo: ['', Validators.required],
    })
  }
}
