import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsuariosService } from '@serv/usuarios.service';
import { RestablecerPasswordComponent } from '../restablecer-password/restablecer-password.component';
import { DepartamentosUsersInterface } from '@models/encuesta/departamentos-users.interface';
import { MunicipiosUserInterface } from '@models/encuesta/municipios-users.interface';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-agregar-asignacion',
  templateUrl: './agregar-asignacion.component.html',
  styleUrls: ['./agregar-asignacion.component.css', '../modals-desactivar.css', '../../../../app.component.css']
})
export class AgregarAsignacionComponent implements OnInit {
  frmAsignacion: any;
  municipios: any;
  departamentos: any;
  constructor(public dialogoRef: MatDialogRef<RestablecerPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private userModel: UsuariosService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.frmAsignacion = this.initForm();
    this.obtenerDepartamentos();
  }
  initForm(): FormGroup {
    return this.fb.group({
      selectDep: ["", [Validators.required]],
      selectMun: [[], [Validators.required]],
    });
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  @ViewChild('selDep') selDep: MatSelect;
  @ViewChild('selMun') selMun: Array<any>;
  onAgregar() {
    const {selectMun}=this.frmAsignacion.value
    alert(selectMun[2])
  }
  changeDep() {
    try {
      if (this.selDep.value == "") {
        this.frmAsignacion.patchValue({
          selectMun: [""],
        })
        this.municipios = [];
      } else {
        this.frmAsignacion.patchValue({
          selectMun: [""],
        })
        this.MunicipiosUser(this.selDep.value)
      }
    } catch (error) {
      console.log(error);
    }
  }
  changeMun() {
  }
  obtenerDepartamentos(): void {
    try {
      this.userModel.getDepartamentos().subscribe((response: DepartamentosUsersInterface[]) => {
        this.departamentos = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  //TODO: Metodo para obtener los municipios asignados al usuario
  MunicipiosUser(id: string) {
    this.userModel.getMunicipios(id).subscribe((response: MunicipiosUserInterface[]) => {
      this.municipios = response;
    })
  }
  depChange() { }
}
