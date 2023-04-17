import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UsuariosService } from '@serv/usuarios.service';
import { RestablecerPasswordComponent } from '../restablecer-password/restablecer-password.component';
import { DepartamentosUsersInterface } from '@models/encuesta/departamentos-users.interface';
import { MunicipiosUserInterface } from '@models/encuesta/municipios-users.interface';
import { MatSelect } from '@angular/material/select';
import { InfoComponent } from '../info/info.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-agregar-asignacion',
  templateUrl: './agregar-asignacion.component.html',
  styleUrls: ['./agregar-asignacion.component.css', '../modals.css', '../../../../app.component.css']
})
export class AgregarAsignacionComponent implements OnInit {
  frmAsignacion: any;
  municipios: any;
  departamentos: any;
  constructor(public dialogoRef: MatDialogRef<RestablecerPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<any>, private userModel: UsuariosService, private fb: FormBuilder, private dialog: MatDialog) { }
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
    try {
      const { selectMun } = this.frmAsignacion.value
      selectMun.forEach((element: string) => {
        this.userModel.postAsignaciones(this.data[0], element).subscribe(data => {
          if (data.estado == 2) {
            this.mensaje("Información", "Se ha asignado correctamente", 2);
          } else {
            this.mensaje("Error", "No se ha podido asignar", 3);
          }
        })
      });
      this.dialogoRef.close();
    } catch {
      this.mensaje("Error", "No se ha seleccionado ningún municipio", 3)
    }
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
        this.MunicipiosUser(this.selDep.value, this.data[0])
      }
    } catch (error) {

      this.mensaje("Advertencia", "Es posible que este usuario ya tenga todos los municipios de este departamento asignados", 1)

    }
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
  MunicipiosUser(dep: string, id: number) {
    try {
      this.userModel.getMunicipios(dep, id).subscribe((response: any) => {
        if (response.estado == 1) {
          this.mensaje("Advertencia", "Es posible que este usuario ya tenga todos los municipios de este departamento asignados", 1);
        } else if (response.estado == 3) {
          this.mensaje("Error", "Ocurrio un error", 3);
        } else {
          this.municipios = response;
        }
      })
    } catch (error) {
      this.mensaje("Advertencia", "Es posible que este usuario ya tenga todos los municipios de este departamento asignados", 1)
    }
  }
  depChange() { }
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
