import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { JuntaService } from '@serv/junta.service';
import { InfoComponent } from '../../info/info.component';
import { CargosInterface } from '@models/administrar/junta/cargos.interface';

@Component({
  selector: 'app-agregar-cargo',
  templateUrl: './agregar-cargo.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class AgregarCargoComponent implements OnInit {
  cargo: FormControl;
  botonName: string;
  btnClass: string;
  showTitle: boolean;
  label: string;
  nombre: any;
  constructor(private dialogoRef: MatDialogRef<AgregarCargoComponent>, private dialog: MatDialog, private juntaModel: JuntaService, @Inject(MAT_DIALOG_DATA) public data: Array<any>) {
    if (this.data[0] == 1) {
      this.showTitle = false;
      this.botonName = "Agregar";
      this.btnClass = "btnGuardar";
      this.label = "Ingrese el Cargo";
    } else {
      this.getCargo(data[1]);
      this.showTitle = true;
      this.botonName = "Editar";
      this.btnClass = "btnEditar";
      this.label = "Nuevo nombre";
    }
  }

  ngOnInit() {
    this.cargo = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  }
  getErrorMessage() {
    if (this.cargo.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.cargo.hasError('maxLength') ? '' : 'No puede exceder los 30 caracteres';
  }
  onClickNo(): void {
    this.dialogoRef.close();
  }
  ejecutar(): void {
    try {
      if (this.data[0] == 1) {
        this.juntaModel.postCargo(this.cargo.value).subscribe((data: any) => {
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
        this.juntaModel.putCargo(this.data[1],this.cargo.value).subscribe((data: any) => {
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
  getCargo(id: number) {
    this.juntaModel.getCargoByID(id).subscribe((data: CargosInterface[]) => {
      this.nombre = data[0].cargo;
    })
  }
}
