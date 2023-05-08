import { Component, Inject, OnInit } from '@angular/core';
import { InfoComponent } from '../../info/info.component';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RecursosService } from '@serv/recursos.service';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';
import { SuelosInterface } from '@models/administrar/recursos/suelos.interface';

@Component({
  selector: 'app-agregar-recurso',
  templateUrl: './agregar-recurso.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class AgregarRecursoComponent implements OnInit {
  txtRecurso: FormControl;
  showTitle: boolean;
  funcion: string;
  placeholder: string;
  label: string;
  tipo: string;
  nombre: string;
  btnClass: string;
  botonName: string;
  constructor(private dialogoRef: MatDialogRef<AgregarRecursoComponent>, private dialog: MatDialog, private recursosModel: RecursosService, @Inject(MAT_DIALOG_DATA) public data: Array<any>) {
    this.datos();
  }

  ngOnInit(): void {
    this.txtRecurso = new FormControl("", [Validators.required, Validators.maxLength(150)]);
    this.label = `${this.funcion} Servicio ${this.tipo}`
  }

  getErrorMessage() {
    if (this.txtRecurso.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.txtRecurso.hasError('maxLength') ? '' : 'No puede exceder los 30 caracteres';
  }
  ejecutar() {
    try {
      if (this.data[0] == 1) {
        this.postRecurso();
      } else {
        this.putRecurso();
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3)
    }
  }
  datos(): void {
    if (this.data[2] == "bosque") {
      this.tipo = "Tipo de Bosque"
      this.placeholder = "Bosque Tropical";
    } else {
      this.placeholder = "Suelo Barroso";
      this.tipo = "Tipo de Suelo"
    }
    if (this.data[0] == 1) {
      this.btnClass = "btnGuardar";
      this.funcion = "Agregar"
      this.showTitle = false;
      this.botonName = "Guardar"
    } else {
      this.getRecurso();
      this.label = `Agregar ${this.tipo}`
      this.btnClass = "btnEditar";
      this.showTitle = true;
      this.botonName = "Editar"
      this.funcion = "Editar"
    }
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  getRecurso() {
    try {
      if (this.data[2] == "bosque") {
        this.recursosModel.getBosque(this.data[1]).subscribe((data: BosquesInterface[]) => {
          this.nombre = data[0].tipo;
        });
      } else {
        this.recursosModel.getSuelo(this.data[1]).subscribe((data: SuelosInterface[]) => {
          this.nombre = data[0].tipo;
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  postRecurso() {
    try {
      if (this.data[2] == "bosque") {
        this.recursosModel.postBosque(this.txtRecurso.value).subscribe((data): any => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else {
        this.recursosModel.postSuelo(this.txtRecurso.value).subscribe((data): any => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  putRecurso() {
    try {
      if (this.data[2] == "bosque") {
        this.recursosModel.putBosque(this.data[1], this.txtRecurso.value).subscribe((data): any => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      } else {
        this.recursosModel.putSuelo(this.data[1], this.txtRecurso.value).subscribe((data): any => {
          if (data.estado == 1) {
            this.mensaje("Advertencia", `${data.mensaje}`, 1);
          } else if (data.estado == 2) {
            this.mensaje("Información", `${data.mensaje}`, 2);
            this.dialogoRef.close();
          } else {
            this.mensaje("Error", `${data.mensaje}`, 3);
          }
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
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
