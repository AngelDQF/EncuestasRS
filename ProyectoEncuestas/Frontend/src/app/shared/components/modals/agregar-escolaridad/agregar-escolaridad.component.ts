import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JuntaService } from '@serv/junta.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-agregar-escolaridad',
  templateUrl: './agregar-escolaridad.component.html',
  styleUrls: ['../modals.css','../../../../app.component.css']
})
export class AgregarEscolaridadComponent implements OnInit {
  grado: FormControl;

  constructor(private dialogoRef: MatDialogRef<AgregarEscolaridadComponent>, private dialog: MatDialog, private juntaModel: JuntaService) { }

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
  newGrado(): void {
    try {
      this.juntaModel.postGrado(this.grado.value).subscribe((data: any) => {
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.dialogoRef.close();
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      });
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
