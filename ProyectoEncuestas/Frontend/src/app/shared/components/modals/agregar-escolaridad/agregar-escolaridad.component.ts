import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JuntaService } from '@serv/junta.service';
import { InfoComponent } from '../info/info.component';
import { EscolaridadInterface } from '@models/administrar/junta/escolaridad.interface';

@Component({
  selector: 'app-agregar-escolaridad',
  templateUrl: './agregar-escolaridad.component.html',
  styleUrls: ['../modals.css', '../../../../app.component.css']
})
export class AgregarEscolaridadComponent implements OnInit {
  grado: FormControl;
  botonName: string;
  btnClass: string;
  showTitle: boolean;
  label: string;
  nombre: any;
  constructor(private dialogoRef: MatDialogRef<AgregarEscolaridadComponent>, private dialog: MatDialog, private juntaModel: JuntaService, @Inject(MAT_DIALOG_DATA) public data: Array<any>) {
    if (this.data[0] == 1) {
      this.showTitle = false;
      this.botonName = "Agregar";
      this.btnClass = "btnGuardar";
      this.label = "Ingrese el Grado de Escolaridad";
    } else {
      this.getEscolaridad(data[1]);
      this.showTitle = true;
      this.botonName = "Editar";
      this.btnClass = "btnEditar";
      this.label = "Nuevo nombre";
    }
  }

  ngOnInit() {
    this.grado = new FormControl('', [Validators.required, Validators.maxLength(100)]);
  }
  getErrorMessage() {
    if (this.grado.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.grado.hasError('maxLength') ? '' : 'No puede exceder los 100 caracteres';
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  ejecutar(): void {
    try {
      if (this.data[0] == 1) {
        this.juntaModel.postGrado$(this.grado.value).subscribe((data: any) => {
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
        this.juntaModel.putGradoNombre$(this.data[1],this.grado.value).subscribe((data: any) => {
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
  getEscolaridad(id: number) {
    this.juntaModel.getEscolaridadByID(id).subscribe((data: EscolaridadInterface[]) => {
      this.nombre = data[0].grado;
    })
  }
}
