import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FinanciamientosService } from '@serv/financiamientos.service';
import { InfoComponent } from '../../info/info.component';
import { TipoFinancimientoInterface } from '@models/administrar/financiamientos/tipos-financiamientos.interface';
import { FuenteFinancimientoInterface } from '@models/administrar/financiamientos/fuentes-financiamientos.interface';

@Component({
  selector: 'app-agregar-financiamiento',
  templateUrl: './agregar-financiamiento.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class AgregarFinanciamientoComponent implements OnInit {
  txtFinanciamiento: FormControl;
  showTitle: boolean;
  funcion: string;
  placeholder: string;
  label: string;
  tipo: string;
  nombre: string;
  btnClass: string;
  botonName: string;
  constructor(private dialogoRef: MatDialogRef<AgregarFinanciamientoComponent>, private dialog: MatDialog, private finModel: FinanciamientosService, @Inject(MAT_DIALOG_DATA) public data: Array<any>) {
    this.datos();
  }

  ngOnInit(): void {
    if (this.data[2] == "tipo") {
      this.txtFinanciamiento = new FormControl("", [Validators.required, Validators.maxLength(30)]);
    }else{
      this.txtFinanciamiento = new FormControl("", [Validators.required, Validators.maxLength(50)]);
    }
    this.label = `${this.funcion} ${this.tipo} de Financiamiento`
  }

  getErrorMessage() {
    if (this.txtFinanciamiento.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.txtFinanciamiento.hasError('maxLength') ? '' : 'No puede exceder los 30 caracteres';
  }
  ejecutar() {
    try {
      if (this.data[0] == 1) {
        this.postFinanciamiento();
      } else {
        this.putFinanciamiento();
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3)
    }
  }
  datos(): void {
    if (this.data[2] == "tipo") {
      this.tipo = "Tipo"
      this.placeholder = "Prestamo";
    } else {
      this.placeholder = "Bancario";
      this.tipo = "Fuente"
    }
    if (this.data[0] == 1) {
      this.btnClass = "btnGuardar";
      this.funcion = "Agregar"
      this.showTitle = false;
      this.botonName = "Guardar"
    } else {
      this.getFinanciamiento();
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
  getFinanciamiento() {
    try {
      if (this.data[2] == "tipo") {
        this.finModel.getTipoFin(this.data[1]).subscribe((data: TipoFinancimientoInterface[]) => {
          this.nombre = data[0].tipo;
        });
      } else {
        this.finModel.getFuenteFin(this.data[1]).subscribe((data: FuenteFinancimientoInterface[]) => {
          this.nombre = data[0].fuente;
        });
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  postFinanciamiento() {
    try {
      if (this.data[2] == "tipo") {
        this.finModel.postTipoFin(this.txtFinanciamiento.value).subscribe((data): any => {
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
        this.finModel.postFuenteFin(this.txtFinanciamiento.value).subscribe((data): any => {
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
  putFinanciamiento() {
    try {
      if (this.data[2] == "tipo") {
        this.finModel.putTipoFin(this.data[1], this.txtFinanciamiento.value).subscribe((data): any => {
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
        this.finModel.putFuenteFin(this.data[1], this.txtFinanciamiento.value).subscribe((data): any => {
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
